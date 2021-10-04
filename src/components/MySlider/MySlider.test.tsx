import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MySlider from "./MySlider";
import imageData from "../../data/imageData";

describe("test MySlider Component", () => {
  it("should render without issue", () => {
    const wrapper = render(<MySlider imageData={imageData} photos={5} />);
    const sliderElement = wrapper.getAllByRole("img");
    expect(sliderElement).not.toHaveLength(0);
  });
  it("should render 5 images", () => {
    render(<MySlider imageData={imageData} photos={5} />);
    const images = screen.queryAllByRole("img");
    expect(images).toHaveLength(5);
  });
});
