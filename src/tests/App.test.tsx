import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

// [sb] TODO delete test below and implement actual logic
test("renders hello world", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Hello world I am a cool list of github repos/i
  );
  expect(linkElement).toBeInTheDocument();
});
