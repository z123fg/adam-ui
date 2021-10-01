import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input/Input";
export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Small: ComponentStory<typeof Input> = () => (
  <Input color="green" size="small" type="text" placeholder="Small" />
);
export const Medium: ComponentStory<typeof Input> = () => (
  <Input color="red" size="medium" type="text" placeholder="Medium" />
);
export const Large: ComponentStory<typeof Input> = () => (
  <Input color="blue" size="large" type="text" placeholder="Large" />
);
