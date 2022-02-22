import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import RepoCard from "./RepoCard";

describe("RepoCard", () => {
  afterEach(cleanup);

  it("renders correctly repo card", async () => {
    const { getByText } = render(
      <RepoCard
        name="cool-repo"
        stargazerCount={200}
        forkCount={10}
        description="lorem ipsum"
        url="http://www.google.com"
      />
    );
    getByText(/cool-repo/i);
    getByText(/200/i);
    getByText(/10/i);
  });
});
