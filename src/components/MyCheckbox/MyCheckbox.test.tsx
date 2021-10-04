import { render } from "@testing-library/react";
import MyCheckbox, { CheckboxColor, CheckboxSize } from "./MyCheckbox";

describe('test MyCheckbox Component', () => {

  it('should snapshot', () => {
    const wrapper = render(<MyCheckbox data-testid="element" />)
    const firstRender = wrapper.asFragment()
    expect(firstRender).toMatchSnapshot()
  })

  it("should render without issue", () => {
    const wrapper = render(<MyCheckbox data-testid="element" />);
    const checkboxElement = wrapper.getByTestId('element')
    expect(checkboxElement).toBeInTheDocument();
  });

  it('should render correct checkbox based on checkbox porps', () => {
    const checkboxProps = {
      checkboxSize: CheckboxSize.Small,
      checkboxColor: CheckboxColor.Red
    }
    const wrapper = render(<MyCheckbox data-testid="element"
      {...checkboxProps}
      disabled
      className='checkbox-test'
    />)
    const checkboxElement = wrapper.getByTestId('element')
    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement?.tagName).toBe('INPUT')
    expect(checkboxElement).toHaveClass('checkbox', 'checkbox-red', 'checkbox-sm', 'checkbox-test')
  })

})