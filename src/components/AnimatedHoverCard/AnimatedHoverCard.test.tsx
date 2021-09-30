import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AnimatedHoverCard, { CardType, CardStyle } from "./AnimatedHoverCard";

describe("test AnimatedHoverCard", () => {
  it("should render Pure Div without issue", () => {
    const wrapper = render(
      <AnimatedHoverCard
        cardStyle={CardStyle.Style2}
        cardType={CardType.Pure}
      />
    );

    const divElement = wrapper.getByLabelText("Pure Card Div");
    expect(divElement).toBeInTheDocument();
  });

  it("should render Text Div without issue", () => {
    const wrapper = render(
      <AnimatedHoverCard
        cardStyle={CardStyle.Style2}
        cardType={CardType.Text}
        title="title"
        description="description"
      />
    );

    const divElement = wrapper.getByLabelText("Text Card Div");
    expect(divElement).toBeInTheDocument();
  });

  it("div can custom className", () => {
    const wrapper = render(
      <AnimatedHoverCard
        cardStyle={CardStyle.Style2}
        cardType={CardType.Text}
        title="title"
        description="description"
        className="test"
      />
    );

    const divElement = wrapper.getByLabelText("Image Div");
    expect(divElement).toBeInTheDocument();
    expect(divElement).toHaveClass("test");
  });
});
