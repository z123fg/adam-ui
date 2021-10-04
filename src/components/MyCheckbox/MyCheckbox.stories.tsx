import { ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import MyCheckbox, { CheckboxColor, CheckboxSize } from "./MyCheckbox";

export default {
  title:"Example/MyCheckbox",
  component:MyCheckbox,

} as ComponentMeta<typeof MyCheckbox>

const Template: ComponentStory<typeof MyCheckbox> = (args) => (
  <MyCheckbox {...args}/>
);

export const Small = Template.bind({})
Small.args ={
  checkboxSize:CheckboxSize.Small
}

export const Large = Template.bind({})
Large.args = {
  checkboxSize: CheckboxSize.Large
}



export const Red = Template.bind({})
Red.args = {
  checkboxColor: CheckboxColor.Red
}

export const Green = Template.bind({})
Green.args = {
  checkboxColor: CheckboxColor.Green
}

export const Blue = Template.bind({})
Blue.args = {
  checkboxColor: CheckboxColor.Blue
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}

export const DefaultCheck = Template.bind({})
DefaultCheck.args = {
  defaultCheck: true
}