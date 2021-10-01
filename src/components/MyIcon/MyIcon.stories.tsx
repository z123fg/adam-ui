import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import MyIcon, { IconSize, IconColor } from "./MyIcon";

export default {
	title: "Example/MyIcon",
	component: MyIcon,
} as ComponentMeta<typeof MyIcon>;

const Template: ComponentStory<typeof MyIcon> = (args) => <MyIcon {...args} />;

export const DefaultIcons = () => (
	<div>
		<MyIcon name="home" />
		<MyIcon name="users" />
		<MyIcon name="search" />
		<MyIcon name="star" />
		<MyIcon name="moon" />
		<MyIcon name="credit card" />
		<MyIcon name="info" />
		<MyIcon name="check" />
		<MyIcon name="heart" />
	</div>
);

export const DifferentSizeIcons = () => (
	<>
		<div>
			<MyIcon name="home" />
			<MyIcon name="users" />
			<MyIcon name="search" />
			<MyIcon name="star" />
			<MyIcon name="moon" />
			<MyIcon name="credit card" />
			<MyIcon name="info" />
			<MyIcon name="check" />
			<MyIcon name="heart" />
		</div>
		<div>
			<MyIcon name="home" size={IconSize.Large} />
			<MyIcon name="users" size={IconSize.Large} />
			<MyIcon name="search" size={IconSize.Large} />
			<MyIcon name="star" size={IconSize.Large} />
			<MyIcon name="moon" size={IconSize.Large} />
			<MyIcon name="credit card" size={IconSize.Large} />
			<MyIcon name="info" size={IconSize.Large} />
			<MyIcon name="check" size={IconSize.Large} />
			<MyIcon name="heart" size={IconSize.Large} />
		</div>
	</>
);
export const DifferentColorIcons = () => (
	<div>
		<MyIcon name="home" size={IconSize.Large} />
		<MyIcon name="users" size={IconSize.Large} color="blue" />
		<MyIcon name="search" size={IconSize.Large} color="purple" />
		<MyIcon name="star" size={IconSize.Large} color="green" />
		<MyIcon name="moon" size={IconSize.Large} color="grey" />
		<MyIcon name="credit card" size={IconSize.Large} color="teal" />
		<MyIcon name="info" size={IconSize.Large} color="pink" />
		<MyIcon name="check" size={IconSize.Large} color="brown" />
		<MyIcon name="heart" size={IconSize.Large} color="olive" />
	</div>
);

export const LoadingIcon = () => (
	<MyIcon name="spinner" size={IconSize.Large} loading />
);

export const DisabledIcon = () => (
	<div>
		<MyIcon name="home" size={IconSize.Large} />
		<MyIcon name="home" size={IconSize.Large} disabled />
	</div>
);

export const Large = Template.bind({});
Large.args = {
	name: "home",
	size: IconSize.Large,
};
export const Small = Template.bind({});
Small.args = {
	name: "home",
	size: IconSize.Small,
};
export const Disabled = Template.bind({});
Disabled.args = {
	name: "home",
	disabled: true,
};
