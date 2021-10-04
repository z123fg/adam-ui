import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react';
import Checkbox, { CheckboxSize, CheckboxType, MyCheckboxProps } from "./Checkbox";

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<MyCheckboxProps> = (args:any) => <Checkbox {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  checkboxType: CheckboxType.Primary,
}

export const Secondary = Template.bind({});
Secondary.args = {
  checkboxType: CheckboxType.Secondary,
}

export const Large = Template.bind({});
Large.args = {
  checkboxSize: CheckboxSize.Large,
}

export const Small = Template.bind({});
Small.args = {
  checkboxSize: CheckboxSize.Small,
}