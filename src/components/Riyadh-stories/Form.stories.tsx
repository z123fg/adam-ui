import Button from "./Button/Button";
import Input from "./Input/Input";
import Textarea from "./Textarea/Textarea";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "Forms",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Register: ComponentStory<typeof Input> = () => {
  return (
    <div>
      <Input size="medium" type="text" placeholder="First Name" />
      <br />
      <Input size="medium" type="text" placeholder="Last Name" />
      <br />
      <Input size="medium" type="text" placeholder="Email Address" />
      <br />
      <Input size="medium" type="password" placeholder="Password" />
      <br />
      <Button variant="success">Register</Button>
    </div>
  );
};

export const Login = () => {
  return (
    <div>
      <Input size="medium" type="text" placeholder="Email Address" />
      <br />
      <Input size="medium" type="password" placeholder="Password" />
      <br />
      <Button variant="primary">Log in</Button>
    </div>
  );
};
export const Contact = () => {
  return (
    <div>
      <Input size="medium" type="text" placeholder="Full Name" />
      <br />
      <Input size="medium" type="text" placeholder="Email Address" />
      <br />
      <Input size="medium" type="text" placeholder="Phone Number" />
      <br />
      <Textarea size="large" type="text" placeholder="Message" />
      <br />
      <Button variant="danger">Submit</Button>
    </div>
  );
};
