import React from "react";
import { render } from "@testing-library/react";
import App from "./index";

test("renders learn react link", () => {
  const { getByText } = render(
    <div id="root">
      <App />
    </div>
  );
  const linkElement = getByText(/carrefour/i);
  expect(linkElement).toBeInTheDocument();
});
