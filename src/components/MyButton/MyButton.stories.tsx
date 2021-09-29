import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MyButton, { ButtonSize, ButtonType } from "./MyButton";

export default {
  title: "Example/MyButton",
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args}>My Button</MyButton>
);

export const Default = Template.bind({});
Default.args = {
    buttonType:ButtonType.Default,
}

export const Danger = Template.bind({});
Danger.args = {
    buttonType:ButtonType.Danger,
}
export const Large = Template.bind({});
Large.args = {
    buttonSize:ButtonSize.Large,
}
export const Small = Template.bind({});
Small.args = {
    buttonSize:ButtonSize.Small
}
export const Disabled = Template.bind({});
Disabled.args = {
    disabled:true
}
export const Link = Template.bind({});
Link.args = {
    buttonType:ButtonType.Link,
    href:"https://www.google.com"
}



