import React from "react";
import { render, screen } from "../test-utils";
import userEvent from "@testing-library/user-event";
import { App } from "./App";

jest.spyOn(window, "alert").mockImplementation(() => {});

test("App contains correct text", () => {
  render(<App />);
  const text = screen.getByText("Hello world!");
  expect(text).toBeInTheDocument();
});

test("VUI button can be clicked", () => {
  render(<App />);
  userEvent.click(screen.getByRole("button", { name: "Click me" }));
  expect(window.alert).toBeCalled();
});
