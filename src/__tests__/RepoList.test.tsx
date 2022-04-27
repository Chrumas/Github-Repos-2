import * as React from "react";
import * as ReactDOM from "react-dom";
import { RepoList } from "../RepoList";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<RepoList />, div);
});

it("matches snapshot", () => {
  const tree = renderer.create(<RepoList />).toJSON();
  expect(tree).toMatchSnapshot();
});
