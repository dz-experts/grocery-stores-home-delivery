import * as React from "react";
import { render, fireEvent, act, cleanup, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import { AddStore } from "../AddStore";

beforeAll(() => {
  const consoleError = console.error;
  jest.spyOn(console, "warn").mockImplementation((...args) => {
    if (!args[0].includes("react-i18next")) {
      consoleError(...args);
    }
  });
});

describe("AddStore tests", () => {
  afterEach(cleanup);

  test("Should display addNewStore", async () => {
    const { getByText } = render(<AddStore />);

    const addNewStore = getByText(/addNewStore/);
    expect(addNewStore).toBeInTheDocument();
  });
});
