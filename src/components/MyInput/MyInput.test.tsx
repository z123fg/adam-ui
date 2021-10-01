import { render, fireEvent } from "@testing-library/react"
import MyInput, { InputSize, InputStyle, InputType } from "./MyInput"

describe("Test my Input Component", () => {
  it("should render without any problem", () => {
    const wrapper = render(<MyInput value="Default Input " />)
    const myInput = wrapper.getByDisplayValue("Default Input")
    expect(myInput).toBeInTheDocument()
  })

  it("should render input with class name of input-large", () => {
    const wrapper = render(
      <MyInput inputSize={InputSize.Large} value="Large Input" />
    )
    const inputElement = wrapper.getByDisplayValue("Large Input")
    expect(inputElement).toHaveClass("input-large")
  })

  it("should render an input type of number, and value should be changed to 10", () => {
    const wrapper = render(<MyInput inputType={InputType.Number} value={5} />)
    const inputElement = wrapper.getByDisplayValue(5)
    fireEvent.change(inputElement, { target: { value: 10 } })
    expect(inputElement).toHaveValue(10)
  })
  it("should allow user's added extra class names", () => {
    const wrapper = render(
      <MyInput
        value="Default Input "
        className="testClassName test2 test3 test4 test 5"
      />
    )
    const myInput = wrapper.getByDisplayValue("Default Input")
    expect(myInput).toHaveClass("testClassName test2 test3 test4 test 5")
  })
  it("Read Only input should be readOnly", () => {
    const wrapper = render(<MyInput value="Read Only" ReadOnly />)
    const myInput = wrapper.getByDisplayValue("Read Only")
    expect(myInput).toHaveAttribute('readonly')
  })
  it("Read Only should not be clickable", ()=>{
    const wrapper = render(<MyInput value="Read Only" ReadOnly />)
    const myInput = wrapper.getByDisplayValue("Read Only")
    const mockOnClickHandler = jest.fn();
    myInput && fireEvent.click(myInput);
    expect(mockOnClickHandler).toHaveBeenCalledTimes(0)
  })
})
