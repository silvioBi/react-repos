import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import NoMatch from "./NoMatch";

describe("NoMatch", () => {
  afterEach(cleanup);

  it("renders 404 page", async () => {
    const { getByText } = render(<NoMatch />);
    getByText(/Uh oh, the page you were looking for was not found!/i);
  });
});
