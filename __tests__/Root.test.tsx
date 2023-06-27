import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Root from "../src/routes/Root";
import { createMemoryHistory } from "history";
import { Router, BrowserRouter } from "react-router-dom";

describe("Root application", () => {
  it("should render title", () => {
    render(<Root />, { wrapper: BrowserRouter });
    const title = screen.getByText(/HRnet/i);
    expect(title).toBeInTheDocument();
  });
  it("should render Menu", () => {
    render(<Root />, { wrapper: BrowserRouter });
    const menuItem1 = screen.getByText(/Create Employee/i);
    const menuItem2 = screen.getByText(/Employee Table/i);
    expect(menuItem1).toBeInTheDocument();
    expect(menuItem2).toBeInTheDocument();
  });
});

describe("test router", () => {
  it("should be navigate", async () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} navigator={history}>
        <Root />
      </Router>
    );
    const user = userEvent.setup();

    await user.click(screen.getByRole("table"));
    expect(history.location.pathname).toBe("/table");

    await user.click(screen.getByRole("create"));
    expect(history.location.pathname).toBe("/");
  });
  it("should be link active", async () => {
    render(
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    );
    const user = userEvent.setup();

    await user.click(screen.getByRole("table"));
    expect((await screen.findByRole("table")).className).toBe(
      "underline decoration-2 underline-offset-8"
    );
    expect((await screen.findByRole("create")).className).toBe("");
  });
});
