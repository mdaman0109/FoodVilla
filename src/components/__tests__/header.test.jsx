import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utlis/appStore";
import { test, expect } from "vitest"; // Ensure you're using `test` and `expect` from vitest

test("Should load header component and login button should be visible", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: /login/i }); // optionally add name for clarity
  expect(loginButton).toBeInTheDocument();
});
