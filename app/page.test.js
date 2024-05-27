import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

test("renders calculator with all buttons", () => {
  const { getByText } = render(<Home />);

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];

  buttons.forEach((btn) => {
    expect(getByText(btn)).toBeInTheDocument();
  });
});

test("handles number button clicks correctly", () => {
  const { getByText, getByDisplayValue } = render(<Home />);

  fireEvent.click(getByText("1"));
  fireEvent.click(getByText("2"));
  fireEvent.click(getByText("3"));

  expect(getByDisplayValue("123")).toBeInTheDocument();
});

test("handles operator button clicks correctly", () => {
  const { getByText, queryAllByDisplayValue } = render(<Home />);

  fireEvent.click(getByText("5"));
  fireEvent.click(getByText("+"));
  fireEvent.click(getByText("3"));
  fireEvent.click(getByText("="));

  const displayElements = queryAllByDisplayValue("8");
  expect(displayElements.length).toBe(2);
});

test("clears the display when C is clicked", () => {
  const { getByText, queryAllByDisplayValue } = render(<Home />);

  fireEvent.click(getByText("9"));
  fireEvent.click(getByText("C"));

  const displayElements = queryAllByDisplayValue("");
  expect(displayElements.length).toBe(2);
});
