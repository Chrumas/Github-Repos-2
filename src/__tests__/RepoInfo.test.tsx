import * as React from "react";
import * as ReactDOM from "react-dom";
import { RepoInfo } from "../RepoInfo";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <RepoInfo url="any" name="any" stargazers="non" owner="uwu" />,
    div
  );
});

it("matches snapshot", () => {
  const tree = renderer
    .create(<RepoInfo url="any" name="any" stargazers="non" owner="uwu" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
