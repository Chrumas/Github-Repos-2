import * as React from "react";
import * as ReactDOM from "react-dom";
import { InputField } from "../InputField";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<InputField />, div);
});

it("renders placeholder correctly", () => {
  const { getByTestId } = render(<InputField />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByTestId("placeholder")).toHaveTextContent("Username");
});

it("renders button correctly", () => {
  const { getByTestId } = render(<InputField />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByTestId("button")).toHaveTextContent("Search");
});

it("renders button with correct color", () => {
  const { getByTestId } = render(<InputField />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByTestId("button")).toHaveStyle("background-color: #0a1236ea");
});

it("matches snapshot", () => {
  const tree = renderer.create(<InputField />).toJSON();
  expect(tree).toMatchSnapshot();
});
