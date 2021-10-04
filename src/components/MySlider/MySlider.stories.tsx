import { ComponentMeta, ComponentStory } from "@storybook/react";
import MySlider, { SliderSize } from "./MySlider";
import imageData from "../../data/imageData";

export default {
  title: "Example/MySlider",
  component: MySlider,
} as ComponentMeta<typeof MySlider>;

const Template: ComponentStory<typeof MySlider> = (args) => (
  <MySlider {...args} imageData={imageData} photos={5} />
);

export const Default = Template.bind({});
Default.args = {
  sliderSize: SliderSize.Small,
};

export const Large = Template.bind({});
Large.args = {
  sliderSize: SliderSize.Large,
};

// export const Default = () => (
//   <MySlider imageData={imageData} photos={5} sliderSize={SliderSize.Small} />
// );
