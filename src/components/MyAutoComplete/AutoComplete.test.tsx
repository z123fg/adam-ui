import React from "react";
import ReactDOM from 'react-dom';
import AutoComplete from "./AutoComplete";
import App from "../../App"
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from "@testing-library/react";

const sampleData = ["1","2","3"]

describe("test auto complete component", () => {
    it("renders without crash", () => {
        const tree = renderer 
            .create(<AutoComplete data={sampleData} />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })

    it("should show the input box", () => {
        const wrapper = render(<AutoComplete data={sampleData} />);
        const inputBox = wrapper.getByRole("textbox")
        expect(inputBox).toBeInTheDocument()
    })

    // it("should show input texts", () => {
    //     const mockChangeHandler = jest.fn;
    //     const wrapper = render(
    //         <AutoComplete 
    //             data={sampleData} 
    //             onSelect={mockChangeHandler} 
    //         />
    //     )
    //     const testEle = wrapper.queryAllByDisplayValue("1")

    //     fireEvent.click(testEle)
    //     expect(mockChangeHandler).toBeCalled;
        
    // })

    /*it("should invoke the select function", () => {
        const mockSelectHandler = jest.fn();
        const wrapper = render(
            <AutoComplete
              data={sampleData}
              onSelect={mockSelectHandler}>
                  
              </AutoComplete>
          );
        expect(mockSelectHandler).toHaveBeenCalledTimes(0);

        const ACElement = wrapper.queryByText("1");
        console.log(ACElement)
        ACElement && fireEvent.click(ACElement)
        expect(mockSelectHandler).toHaveBeenCalledTimes(1)
    })*/

})
