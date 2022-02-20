import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import Repos from "./Repos";

const githubMockResponse = {
  search: {
    __typename: "SearchResultItemConnection",
    pageInfo: {
      __typename: "PageInfo",
      endCursor: "Y3Vyc29yOjU=",
      hasNextPage: true,
      hasPreviousPage: false,
      startCursor: "Y3Vyc29yOjE=",
    },
    edges: [
      {
        __typename: "SearchResultItemEdge",
        node: {
          __typename: "Repository",
          id: "MDEwOlJlcG9zaXRvcnkxNzUzMDY5MTI=",
          name: "use-query-params",
          stargazerCount: 1602,
          forkCount: 79,
        },
      },
      {
        __typename: "SearchResultItemEdge",
        node: {
          __typename: "Repository",
          id: "MDEwOlJlcG9zaXRvcnk5ODQxODUwMQ==",
          name: "react-awesome-query-builder",
          stargazerCount: 1090,
          forkCount: 340,
        },
      },
      {
        __typename: "SearchResultItemEdge",
        node: {
          __typename: "Repository",
          id: "MDEwOlJlcG9zaXRvcnkxNDc3NDk1OTY=",
          name: "fresnel",
          stargazerCount: 901,
          forkCount: 41,
        },
      },
      {
        __typename: "SearchResultItemEdge",
        node: {
          __typename: "Repository",
          id: "MDEwOlJlcG9zaXRvcnkxMjIxMDEyNDg=",
          name: "aws-amplify-graphql",
          stargazerCount: 506,
          forkCount: 115,
        },
      },
      {
        __typename: "SearchResultItemEdge",
        node: {
          __typename: "Repository",
          id: "MDEwOlJlcG9zaXRvcnkxODU1NzcxOTA=",
          name: "next-shopify-storefront",
          stargazerCount: 440,
          forkCount: 81,
        },
      },
    ],
    repositoryCount: 308,
  },
};

const mockUseReposQuery = jest.fn();

jest.mock("../../codegen/generated", () => ({
  useReposQuery: () => mockUseReposQuery(),
}));

describe("Repos", () => {
  afterEach(cleanup);

  it("renders all cards", async () => {
    mockUseReposQuery.mockReturnValueOnce({
      error: null,
      loading: false,
      data: githubMockResponse,
    });
    const { getByText } = render(<Repos />);
    getByText(/use-query-params/i);
    getByText(/react-awesome-query-builder/i);
    getByText(/fresnel/i);
    getByText(/aws-amplify-graphql/i);
    getByText(/next-shopify-storefront/i);
  });

  // [sb] TODO add tests for other scenarios
});
