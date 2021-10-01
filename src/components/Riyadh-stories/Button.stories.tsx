import Button from "./Button/Button";

import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Success: ComponentStory<typeof Button> = () => (
  <Button size="small" variant="success">
    Success
  </Button>
);
export const Secondary: ComponentStory<typeof Button> = () => (
  <Button size="medium" variant="secondary">
    Secondary
  </Button>
);
export const Danger: ComponentStory<typeof Button> = () => (
  <Button size="medium" variant="danger">
    Danger
  </Button>
);

export const Primary: ComponentStory<typeof Button> = () => (
  <Button size="large" variant="primary">
    Primary
  </Button>
);
