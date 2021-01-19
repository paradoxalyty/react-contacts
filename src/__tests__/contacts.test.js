import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { rest } from "msw";
import { server } from "../serverTests";
import { Contacts } from "../pages/Contacts";

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

describe(`contacts get data`, () => {
  test(`loading`, async () => {
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");

    expect(loader).toBeInTheDocument();

    await waitForElementToBeRemoved(loader);
  });

  test(`success`, async () => {
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");

    await waitForElementToBeRemoved(loader);

    expect(loader).not.toBeInTheDocument();
    expect(screen.getByTestId("contacts-table-container")).toBeInTheDocument();
  });

  test(`fail`, async () => {
    server.use(
      rest.get("https://randomuser.me/api/?results=10", (req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({
            error: "Internal server error",
          })
        );
      })
    );
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");

    await waitForElementToBeRemoved(loader);

    expect(loader).not.toBeInTheDocument();
    expect(screen.getByTestId("contacts-error")).toBeInTheDocument();
  });
});

describe(`contacts data view mode`, () => {
  test(`should equal table`, async () => {
    render(<Contacts />);
    const loader = screen.getByTestId("contacts-loader");

    await waitForElementToBeRemoved(loader);

    expect(screen.getByTestId("contacts-table-container")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-data-view-mode-table")).toHaveClass(
      "Mui-selected"
    );

    expect(
      screen.queryByTestId("contacts-grid-container")
    ).not.toBeInTheDocument();
    // expect(screen.getByTestId("toggle-data-view-mode-gird")).not.toHaveClass(
    //     "Mui-selected"
    // );
  });
});
