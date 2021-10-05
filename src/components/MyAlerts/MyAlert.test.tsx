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
        const wrapper = render(<MyAlerts>Default alert</MyAlerts>);
        const firstRender = wrapper.asFragment();
        expect(firstRender).toMatchSnapshot();
       /*  expect(firstRender).toMatchInlineSnapshot(`
        <DocumentFragment>
          <div
            class="alert"
            >
            Default alert
          </div>
        </DocumentFragment>
        `) */
    })
  it("should render without issue", () => {
    const wrapper = render(<MyAlerts>Default alert</MyAlerts>);
    const alertelement = wrapper.queryByText("Default alert");
    expect(alertelement).toBeInTheDocument();
  });

  it("should render correct button based on the prop", () => {
    //const mockOnClickHandler = jest.fn(); //it creates a mock up function
    const alertprops = {
      alertStyle: alertstyle.Large,
      alertSize: alertsize.Secondary,
    };
    const wrapper = render(
      <MyAlerts
        {...alertprops}
        className="alert"        
      >
        alert type
      </MyAlerts>
    );
    const alertelement = wrapper.queryByText("alert type");
    expect(alertelement).toBeInTheDocument();
    expect(alertelement?.tagName).toBe("DIV");
    expect(alertelement).toHaveClass(
      "alert",
      "alert-secondary",
      "alert-lg"
    );
  /*   expect(mockOnClickHandler).toBeCalledTimes(0);
    alertelement && fireEvent.click(alertelement);
    expect(mockOnClickHandler).toBeCalledTimes(1); */
  });
/* 
  it("link button should be rendered properly based on props", () => {
    const wrapper = render(
      <MyAlerts alertStyle={alertstyle.Large}>Link Alert</MyAlerts>
    );
     const alertelement = wrapper.queryByText("Link alert");
    expect(alertelement).toHaveClass("alert", "alert-primary", "alert-sm");
  }); */

  // it("link button should have be disabled", () => {
  //   const mockOnClickHandler = jest.fn();
  //   const wrapper = render(
  //     <MyAlerts
  //       alertStyle={alertstyle.Large}
         
  //     >
  //       Link Button
  //     </MyAlerts>
  //   );

  //   const alertelement = wrapper.queryByText("Link alert");
  //   expect(mockOnClickHandler).toBeCalledTimes(0);
  //   alertelement && fireEvent.click(alertelement);
  //   expect(mockOnClickHandler).toBeCalledTimes(0);
  //   expect(alertelement).toHaveClass("alert", "alert-primary", "alert-sm");
  // });
});
