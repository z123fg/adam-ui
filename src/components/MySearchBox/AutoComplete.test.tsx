import React from "react";
import ReactDOM from 'react-dom';
import AutoComplete from "./AutoComplete";
import App from "../../App"
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from "@testing-library/react";

describe("test MyButton Component", () => {
  // check if the app component renders without crashing
  it('renders without crashing', () => {
    render
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  // check if the ui renders as expected
  it('renders the UI as expected', () => {
    const data = ["1", "2", "3"];
    const tree = renderer
      .create(<AutoComplete data={data} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
