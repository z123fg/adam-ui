import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MyAlerts, { alertsize, alertstyle } from "./MyAlerts";


/* 
jest   //general js testing
react testing library
enzyme 
mocha
chai

cypress e2e, end 2 end headless browser
*/

describe("test MyAlerts Component", () => {
    it("should snapshot", () =>{
        const wrapper = render(<MyAlerts>Default Button</MyAlerts>);
        const firstRender = wrapper.asFragment();
        expect(firstRender).toMatchSnapshot();
        expect(firstRender).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            class="alert  alert-lg alert-sm"
            id="123"
          >
            Default alert
          </div>
        </DocumentFragment>
        `)
    })
  it("should render without issue", () => {
    const wrapper = render(<MyAlerts>Default Button</MyAlerts>);
    const buttonElement = wrapper.queryByText("Default Button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render correct button based on the prop", () => {
    const mockOnClickHandler = jest.fn(); //it creates a mock up function
    const alertprops = {
      alertStyle: alertstyle.Large,
      alertSize: alertsize.Primary,
    };
    const wrapper = render(
      <MyAlerts
        {...alertprops}
        className="alert"        
      >
        alert type
      </MyAlerts>
    );
    const buttonElement = wrapper.queryByText("div type");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement?.tagName).toBe("ALERT");
    expect(buttonElement).toHaveClass(
      "alert",
      "alert-secondary",
      "alert-lg",
      "alert-sm",
    );
    expect(mockOnClickHandler).toBeCalledTimes(0);
    buttonElement && fireEvent.click(buttonElement);
    expect(mockOnClickHandler).toBeCalledTimes(1);
  });

  it("link button should be rendered properly based on props", () => {
    const wrapper = render(
      <MyAlerts alertStyle={alertstyle.Large}>Link Alert</MyAlerts>
    );
    //const buttonElement = wrapper.queryByRole("link",{name:"Link Button"});
    const buttonElement = wrapper.queryByText("Link Button");
    expect(buttonElement).toHaveClass("alert", "alert-primary", "alert-sm");
  });

  it("link button should have be disabled", () => {
    const mockOnClickHandler = jest.fn();
    const wrapper = render(
      <MyAlerts
        alertStyle={alertstyle.Large}
         
      >
        Link Button
      </MyAlerts>
    );

    const buttonElement = wrapper.queryByText("Link Button");
    expect(mockOnClickHandler).toBeCalledTimes(0);
    buttonElement && fireEvent.click(buttonElement);
    expect(mockOnClickHandler).toBeCalledTimes(0);
    expect(buttonElement).toHaveClass("btn", "btn-link", "btn-sm", "disabled");
  });
});
