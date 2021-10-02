import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MySlider, { ISliderProps, SliderSize } from "./MySlider";
import imageData from "../../data/imageData";

export default {
  title: "Example/MySlider",
  component: MySlider,
} as ComponentMeta<typeof MySlider>;

// const Template: ComponentStory<ISliderProps> = (args) => <MySlider {...args}></MySlider></MySlider>;

export const Default = (args) => (
  const { children, sliderSize, photos, imageData } = args;
  <MySlider {...args}>
    <div className="slider-container">
      <div className="slider-inner" style={{ width: photos * 100 + "%" }}>
        {imageData.map((image) => (
          <img key={image.id} src={image.src} />
        ))}
      </div>
    </div>
  </MySlider>
);
