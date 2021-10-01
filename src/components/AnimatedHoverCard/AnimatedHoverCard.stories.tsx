import { ComponentMeta, ComponentStory } from "@storybook/react";
import AnimatedHoverCard, { CardType, CardStyle } from "./AnimatedHoverCard";
import img1 from "./img/img1.png";

export default {
  title: "Example/AnimatedHoverCard",
  component: AnimatedHoverCard,
} as ComponentMeta<typeof AnimatedHoverCard>;

const Template: ComponentStory<typeof AnimatedHoverCard> = (args) => (
  <AnimatedHoverCard {...args} />
);

export const Style1 = Template.bind({});
Style1.args = {
  cardStyle: CardStyle.Style1,
  cardType: CardType.Text,
  title: "Title",
  description: "Description",
  imgSrc: img1,
  bgColor1: "#2da2ff",
  bgColor2: "#444",
  className: "",
  titleClassName: "",
  descriptionClassName: "",
};

export const Style2 = Template.bind({});
Style2.args = {
  cardStyle: CardStyle.Style2,
  cardType: CardType.Text,
  title: "Title",
  description: "Description",
  imgSrc: img1,
  bgColor1: "#2da2ff",
  bgColor2: "#444",
  className: "",
  titleClassName: "",
  descriptionClassName: "",
};

export const Pure = Template.bind({});
Pure.args = {
  cardStyle: CardStyle.Style1,
  cardType: CardType.Pure,
  title: "Title",
  description: "Description",
  imgSrc: img1,
  bgColor1: "#2da2ff",
  bgColor2: "#444",
  className: "",
  titleClassName: "",
  descriptionClassName: "",
};

export const Text = Template.bind({});
Text.args = {
  cardStyle: CardStyle.Style1,
  cardType: CardType.Text,
  title: "Title",
  description: "Description",
  imgSrc: img1,
  bgColor1: "#2da2ff",
  bgColor2: "#444",
  className: "",
  titleClassName: "",
  descriptionClassName: "",
};
