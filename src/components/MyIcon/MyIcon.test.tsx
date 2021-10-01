import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MyIcon, { IconSize, IconColor } from "./MyIcon";

/* 
jest   //general js testing
react testing library
enzyme 
mocha
chai

cypress e2e, end 2 end headless browser
*/

describe("test MyIcon Component", () => {
  it("should snapshot", () => {
    const wrapper = render(<MyIcon id="123" name="home" />);
    const firstRender = wrapper.asFragment();
    expect(firstRender).toMatchSnapshot();
    expect(firstRender).toMatchInlineSnapshot(`
      <DocumentFragment>
        <svg
          class="icon  icon-sm"
          height="20"
          viewBox="0 0 576 512"
        >
          <path
            d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
          />
        </svg>
      </DocumentFragment>
    `);
  });
  // it("should render without issue", () => {
  // 	const wrapper = render(<MyIcon>Default Icon</MyIcon>);
  // 	const buttonElement = wrapper.queryByText("Default Icon");
  // 	expect(buttonElement).toBeInTheDocument();
  // });

  // it("should render correct button based on the prop", () => {
  // 	const mockOnClickHandler = jest.fn(); //it creates a mock up function
  // 	const buttonProps = {
  // 		buttonType: IconType.Secondary,
  // 		buttonSize: IconSize.Large,
  // 	};
  // 	const wrapper = render(
  // 		<MyIcon
  // 			{...buttonProps}
  // 			isDark
  // 			className="btn-red"
  // 			onClick={mockOnClickHandler}>
  // 			Icon type
  // 		</MyIcon>
  // 	);
  // 	const buttonElement = wrapper.queryByText("Icon type");
  // 	expect(buttonElement).toBeInTheDocument();
  // 	expect(buttonElement?.tagName).toBe("BUTTON");
  // 	expect(buttonElement).toHaveClass(
  // 		"btn",
  // 		"btn-secondary",
  // 		"btn-lg",
  // 		"btn-dark",
  // 		"btn-red"
  // 	);
  // 	expect(mockOnClickHandler).toBeCalledTimes(0);
  // 	buttonElement && fireEvent.click(buttonElement);
  // 	expect(mockOnClickHandler).toBeCalledTimes(1);
  // });

  // it("link button should be rendered properly based on props", () => {
  // 	const wrapper = render(
  // 		<MyIcon buttonType={IconType.Link}>Link Icon</MyIcon>
  // 	);
  // 	//const buttonElement = wrapper.queryByRole("link",{name:"Link Icon"});
  // 	const buttonElement = wrapper.queryByText("Link Icon");
  // 	expect(buttonElement).toHaveClass("btn", "btn-link", "btn-sm");
  // });

  // it("link button should have be disabled", () => {
  // 	const mockOnClickHandler = jest.fn();
  // 	const wrapper = render(
  // 		<MyIcon
  // 			buttonType={IconType.Link}
  // 			onClick={mockOnClickHandler}
  // 			disabled>
  // 			Link Icon
  // 		</MyIcon>
  // 	);

  // 	const buttonElement = wrapper.queryByText("Link Icon");
  // 	expect(mockOnClickHandler).toBeCalledTimes(0);
  // 	buttonElement && fireEvent.click(buttonElement);
  // 	expect(mockOnClickHandler).toBeCalledTimes(0);
  // 	expect(buttonElement).toHaveClass(
  // 		"btn",
  // 		"btn-link",
  // 		"btn-sm",
  // 		"disabled"
  // 	);
  // });
});
