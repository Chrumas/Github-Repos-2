import * as React from "react";
import * as ReactDOM from "react-dom";
import { ErrorMessage } from "../ErrorMessage";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ErrorMessage inputColor="red" inputName="any" />, div);
});

it("renders message correctly", () => {
  const { getByTestId } = render(
    <ErrorMessage inputColor="red" inputName="any" />
  );
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByTestId("error")).toHaveTextContent("any");
});

it("renders with correct color", () => {
  const { getByTestId } = render(
    <ErrorMessage inputColor="red" inputName="any" />
  );
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByTestId("error")).toHaveStyle("color: red");
});

it("matches snapshot", () => {
  const tree = renderer
    .create(<ErrorMessage inputColor="red" inputName="any" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
