import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Message, { MessageSize, MessageColor, MessageType } from "./Message";


describe("test Message Component", () => {
    it("should snapshot", () =>{
        const wrapper = render(<Message>Default Message</Message>);
        const firstRender = wrapper.asFragment();
        expect(firstRender).toMatchSnapshot();
        expect(firstRender).toMatchInlineSnapshot(`
        <DocumentFragment>
            <div class='content'>
                <p>Default Message</p>
            </div>
        </DocumentFragment>
        `)
    })
  it("should render without issue", () => {
    const wrapper = render(<Message>Default Message</Message>);
    const messageElement = wrapper.queryByText("Default Message");
    expect(messageElement).toBeInTheDocument();
  });

//   it("should render correct button based on the prop", () => {
//     const mockOnClickHandler = jest.fn(); //it creates a mock up function
//     const buttonProps = {
//       messageColor: MessageColor.Black,
//       messageSize: MessageSize.Large,
//     };
//     const wrapper = render(
//       <Message
//         {...buttonProps}
//       >
//         Message color and size
//       </Message>
//     );
//     const buttonElement = wrapper.queryByText("Button type");
//     expect(buttonElement).toBeInTheDocument();
//     expect(buttonElement?.tagName).toBe("BUTTON");
//     expect(buttonElement).toHaveClass(
//       "msg",
//       "msg-urgent",
//       "msg-lg",
//       "msg-red"
//     );
//     expect(mockOnClickHandler).toBeCalledTimes(0);
//     buttonElement && fireEvent.click(buttonElement);
//     expect(mockOnClickHandler).toBeCalledTimes(1);
//   });

//   it("Urgent button should be rendered properly based on props", () => {
//     const wrapper = render(
//       <Message messageType={MessageType.Urgent}>Urgent Button</Message>
//     );
//     //const buttonElement = wrapper.queryByRole("Urgent",{name:"Urgent Button"});
//     const buttonElement = wrapper.queryByText("Urgent Button");
//     expect(buttonElement).toHaveClass("msg", "msg-urgent", "msg-sm");
//   });

//   it("Urgent button should have be disabled", () => {
//     const mockOnClickHandler = jest.fn();
//     const wrapper = render(
//       <Message
//         MessageType={MessageType.Urgent}
//       >
//         Urgent Button
//       </Message>
//     );

//     const buttonElement = wrapper.queryByText("Urgent Button");
//     expect(mockOnClickHandler).toBeCalledTimes(0);
//     buttonElement && fireEvent.click(buttonElement);
//     expect(mockOnClickHandler).toBeCalledTimes(0);
//     expect(buttonElement).toHaveClass("msg", "msg-Urgent", "msg-sm", "disabled");
//   });
});
