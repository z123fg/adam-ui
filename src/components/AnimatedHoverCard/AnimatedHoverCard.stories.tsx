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

export const Default = Template.bind({});
Default.args = {
  cardStyle: CardStyle.Style1,
  cardType: CardType.Text,
  title: "Title",
  description: "Description",
  imgSrc: img1,
  bgColor1: "#2da2ff",
  bgColor2: "#444",
};
