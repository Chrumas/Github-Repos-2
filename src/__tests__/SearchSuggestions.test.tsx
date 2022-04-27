import * as React from "react";
import * as ReactDOM from "react-dom";
import { SearchSuggestions } from "../SearchSuggestions";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchSuggestions />, div);
});

it("matches snapshot", () => {
  const tree = renderer.create(<SearchSuggestions />).toJSON();
  expect(tree).toMatchSnapshot();
});
