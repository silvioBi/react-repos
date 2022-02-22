import * as React from "react";
import { render, cleanup, fireEvent, act } from "@testing-library/react";
import { ApolloError } from "@apollo/client/errors";
import Repos from "./Repos";

const githubMockResponse = {
  search: {
    __typename: "SearchResultItemConnection",
    pageInfo: {
      __typename: "PageInfo",
      endCursor: "MDEwOlJlcG9zaXRvcnkxODU1NzcxOTA=",
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

const mockFetchMore = jest.fn();

jest.mock("../../codegen/generated", () => ({
  useReposQuery: () => ({
    error: null as ApolloError,
    loading: false,
    data: githubMockResponse,
    fetchMore: mockFetchMore,
  }),
}));

describe("Repos", () => {
  afterEach(cleanup);

  it("renders all cards", async () => {
    const { getByText } = render(<Repos />);
    getByText(/use-query-params/i);
    getByText(/react-awesome-query-builder/i);
    getByText(/fresnel/i);
    getByText(/aws-amplify-graphql/i);
    getByText(/next-shopify-storefront/i);
  });

  it("fetches more results on button click", async () => {
    const { getByText } = render(<Repos />);
    act(() => {
      fireEvent(
        getByText(/Load more/i),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
    });
    expect(mockFetchMore.mock.calls[0][0]).toStrictEqual({
      variables: { after: "MDEwOlJlcG9zaXRvcnkxODU1NzcxOTA=" },
    });
  });
});
