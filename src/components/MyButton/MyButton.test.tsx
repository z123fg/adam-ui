import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MyButton, { ButtonSize, ButtonType } from "./MyButton";


/* 
jest   //general js testing
react testing library
enzyme 
mocha
chai

cypress e2e, end 2 end headless browser
*/

describe("test MyButton Component", () => {
    it("should snapshot", () =>{
        const wrapper = render(<MyButton id="123">Default Button</MyButton>);
        const firstRender = wrapper.asFragment();
        expect(firstRender).toMatchSnapshot();
        expect(firstRender).toMatchInlineSnapshot(`
        <DocumentFragment>
          <button
            class="btn  btn-default btn-sm"
            id="123"
          >
            Default Button
          </button>
        </DocumentFragment>
        `)
    })
  it("should render without issue", () => {
    const wrapper = render(<MyButton>Default Button</MyButton>);
    const buttonElement = wrapper.queryByText("Default Button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render correct button based on the prop", () => {
    const mockOnClickHandler = jest.fn(); //it creates a mock up function
    const buttonProps = {
      buttonType: ButtonType.Secondary,
      buttonSize: ButtonSize.Large,
    };
    const wrapper = render(
      <MyButton
        {...buttonProps}
        isDark
        className="btn-red"
        onClick={mockOnClickHandler}
      >
        Button type
      </MyButton>
    );
    const buttonElement = wrapper.queryByText("Button type");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement?.tagName).toBe("BUTTON");
    expect(buttonElement).toHaveClass(
      "btn",
      "btn-secondary",
      "btn-lg",
      "btn-dark",
      "btn-red"
    );
    expect(mockOnClickHandler).toBeCalledTimes(0);
    buttonElement && fireEvent.click(buttonElement);
    expect(mockOnClickHandler).toBeCalledTimes(1);
  });

  it("link button should be rendered properly based on props", () => {
    const wrapper = render(
      <MyButton buttonType={ButtonType.Link}>Link Button</MyButton>
    );
    //const buttonElement = wrapper.queryByRole("link",{name:"Link Button"});
    const buttonElement = wrapper.queryByText("Link Button");
    expect(buttonElement).toHaveClass("btn", "btn-link", "btn-sm");
  });

  it("link button should have be disabled", () => {
    const mockOnClickHandler = jest.fn();
    const wrapper = render(
      <MyButton
        buttonType={ButtonType.Link}
        onClick={mockOnClickHandler}
        disabled
      >
        Link Button
      </MyButton>
    );

    const buttonElement = wrapper.queryByText("Link Button");
    expect(mockOnClickHandler).toBeCalledTimes(0);
    buttonElement && fireEvent.click(buttonElement);
    expect(mockOnClickHandler).toBeCalledTimes(0);
    expect(buttonElement).toHaveClass("btn", "btn-link", "btn-sm", "disabled");
  });
});
