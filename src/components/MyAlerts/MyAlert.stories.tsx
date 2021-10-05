import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MyAlerts, { alertsize, alertstyle } from "./MyAlerts";

export default {
  title: "Example/MyAlerts",
  component: MyAlerts,
} as ComponentMeta<typeof MyAlerts>;

const Template: ComponentStory<typeof MyAlerts> = (args) => (
  <MyAlerts {...args}>My Alert</MyAlerts>
);

export const large = Template.bind({});
large.args = {
    alertStyle:alertstyle.Large
}

export const small = Template.bind({});
small.args = {
    alertStyle:alertstyle.Small
}
export const primary = Template.bind({});
primary.args = {
    alertSize:alertsize.Primary,
}
export const secondary = Template.bind({});
secondary.args = {
    alertSize:alertsize.Secondary
}
export const success = Template.bind({});
success.args = {
    alertSize:alertsize.Success
}
export const danger = Template.bind({});
danger.args = {
    alertSize:alertsize.Danger
}
export const warning = Template.bind({});
warning.args = {
    alertSize:alertsize.Warning
}
export const info = Template.bind({});
info.args = {
    alertSize:alertsize.Info
}
export const light = Template.bind({});
light.args = {
    alertSize:alertsize.Light
}
export const dark = Template.bind({});
dark.args = {
    alertSize:alertsize.Dark
}
 


