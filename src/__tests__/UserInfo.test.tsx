import * as React from "react";
import * as ReactDOM from "react-dom";
import { UserInfo } from "../UserInfo";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserInfo />, div);
});

it("matches snapshot", () => {
  const tree = renderer.create(<UserInfo />).toJSON();
  expect(tree).toMatchSnapshot();
});
