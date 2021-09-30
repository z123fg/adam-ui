import { ComponentMeta, ComponentStory } from "@storybook/react";
import AnimatedHoverCard, { CardType, CardStyle } from "./AnimatedHoverCard";

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
};
