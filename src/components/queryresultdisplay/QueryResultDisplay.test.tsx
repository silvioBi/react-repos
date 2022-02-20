import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import { ApolloError } from "@apollo/client/errors";
import QueryResultDisplay from "./QueryResultDisplay";

describe("QueryResultDisplay", () => {
  afterEach(cleanup);

  it("renders loading state", async () => {
    const { getByText } = render(<QueryResultDisplay loading />);
    getByText(/Loading.../i);
  });

  it("renders no data message", async () => {
    const { getByText } = render(<QueryResultDisplay />);
    getByText(/nothing to show/i);
  });

  it("renders error", async () => {
    const { getByText } = render(
      <QueryResultDisplay error={new Error("r.i.p.") as ApolloError} />
    );
    getByText(/r.i.p./i);
  });

  it("renders data", async () => {
    const { getByText } = render(
      <QueryResultDisplay hasData>Hello world!</QueryResultDisplay>
    );
    getByText(/Hello world!/i);
  });
});
