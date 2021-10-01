import React from 'react';
import Icon, {IconSize, IconType} from './Icon'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Example/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args}>My Button</Icon>
);

export const Default = Template.bind({});
Default.args = {
  iconSize:IconSize.Large,
};


