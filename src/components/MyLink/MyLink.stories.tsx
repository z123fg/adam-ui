import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MyLink, { Underline, Variant } from "./MyLink";

export default {
    title: "Example/MyLink",
    component: MyLink,
} as ComponentMeta<typeof MyLink>;

const Template: ComponentStory<typeof MyLink> = (args) => (
    <MyLink {...args}>My Link</MyLink>
);

export const Default = Template.bind({});
Default.args = {
    variant: Variant.Default,
}

export const Body = Template.bind({});
Body.args = {
    variant: Variant.Body,
}

export const Button = Template.bind({});
Button.args = {
    variant: Variant.Button,
}

export const H1 = Template.bind({});
H1.args = {
    variant: Variant.H1,
}

export const H2 = Template.bind({});
H2.args = {
    variant: Variant.H2,
}

export const H3 = Template.bind({});
H3.args = {
    variant: Variant.H3,
}

export const Subtitle = Template.bind({});
Subtitle.args = {
    variant: Variant.subtitle,
}

export const Always = Template.bind({});
Always.args = {
    underLine: Underline.Always,
}

export const Hover = Template.bind({});
Hover.args = {
    underLine: Underline.Hover,
}

export const None = Template.bind({});
None.args = {
    underLine: Underline.None,
}