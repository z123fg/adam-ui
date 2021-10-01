import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import MyInput, { InputSize, InputType, InputStyle } from "./MyInput"

export default {
  title: "Example/MyInput",
  component: MyInput,
} as ComponentMeta<typeof MyInput>

const Template: ComponentStory<typeof MyInput> = (args) => <MyInput {...args} />

export const Default = Template.bind({})
Default.args = {
  inputType: InputType.Text,
  value: "Default",
}

export const Outline = Template.bind({})
Outline.args = {
  inputStyle: InputStyle.Outline,
  inputType: InputType.Text,
  value: "Outline",
}
export const Filled = Template.bind({})
Filled.args = {
  inputStyle: InputStyle.Filled,
  inputType: InputType.Text,
  value: "Filled",
}

export const Danger = Template.bind({})
Danger.args = {
  inputStyle: InputStyle.Default,
  inputType: InputType.Text,
  value: "Danger",
  className: "input-fail",
}
export const Success = Template.bind({})
Success.args = {
  inputStyle: InputStyle.Default,
  inputType: InputType.Text,
  value: "Success",
  className: "input-success",
}
export const Large = Template.bind({})
Large.args = {
  inputType: InputType.Text,
  value: "Large Input",
  inputSize: InputSize.Large,
}
export const Small = Template.bind({})
Small.args = {
  inputType: InputType.Text,
  value: "Small Input",
  inputSize: InputSize.Small,
}
export const ReadOnly = Template.bind({})
ReadOnly.args = {
  inputType: InputType.Text,
  value: "Read Only",
  ReadOnly: true,
}
// export const Small = Template.bind({})
// Small.args = {
//   buttonSize: ButtonSize.Small,
// }
// export const Disabled = Template.bind({})
// Disabled.args = {
//   disabled: true,
// }
// export const Link = Template.bind({})
// Link.args = {
//   buttonType: ButtonType.Link,
//   href: "https://www.google.com",
// }
