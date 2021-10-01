import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Message, {
  MessageSize,
  MessageColor,
  MessageType
} from "./Message";

export default {
    title: "Message",
    component: Message
}as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />;

export const Urgent = Template.bind({});
Urgent.args = {
  msgType: MessageType.Urgent,
  msgContent: 'Message',
};

export const Red = Template.bind({});
Red.args = {
  msgColor:MessageColor.Red,
  msgContent: 'Message',
};

export const Large = Template.bind({});
Large.args = {
  msgSize: MessageSize.Large,
  msgContent: 'Message',
};

export const Click = Template.bind({});
Click.args = {
  msgClick: true,
  msgContent: 'Message',
};

export const CustomMessage = Template.bind({});
CustomMessage.args = {
  msgContent: 'Custom Message',
};