import React, { FC } from "react";
import { IconPath } from "./Icons";
import genClassName from "../../util/genClassName";
import { render } from "@testing-library/react";

export enum IconSize {
	Large = "lg",
	Small = "sm",
}

// export enum IconType {
// 	Primary = "primary",
// 	Secondary = "secondary",
// 	Danger = "danger",
// 	Default = "default",
// 	Link = "link",
// }
// export enum IconColor {
// 	Red = "red",
// 	Orange = "orange",
// 	Yellow = "Yellow",
// 	Green = "green",
// 	Teal = "teal",
// 	Blue = "blue",
// 	Pink = "pink",
// 	Black = "black",
// 	Grey = "grey",
// 	Primary = "primary",
// }

export type IconColor =
	| "primary"
	| "red"
	| "orange"
	| "yellow"
	| "olive"
	| "green"
	| "teal"
	| "blue"
	| "violet"
	| "purple"
	| "pink"
	| "brown"
	| "grey"
	| "black";

interface IMyIconProps {
	// type?: IconType; //primary danger default
	/** 
    icon type for MyIcon
     */
	size?: IconSize; //large small
	color?: IconColor;
	className?: string;
	name: string;
	loading?: boolean;
	disabled?: boolean;
}

type ExtendedMyIcon = IMyIconProps &
	(
		| React.DetailedHTMLProps<
				React.AnchorHTMLAttributes<HTMLAnchorElement>,
				HTMLAnchorElement
		  >
		| React.DetailedHTMLProps<
				React.ButtonHTMLAttributes<HTMLButtonElement>,
				HTMLButtonElement
		  >
	);

const MyIcon: FC<ExtendedMyIcon> = (props) => {
	const {
		// type = IconType.Default,
		size = IconSize.Small,
		color = "teal",
		disabled,
		loading,
		className = "",
		name,
		...rest
	} = props;

	console.log("className", className);
	console.log("fill color", color);
	// console.log(
	// 	"icon names",
	// 	Object.keys(IconPath).reduce((a, v) => ({ ...a, [v]: v }), {})
	// );
	let classNameStr = genClassName(className, "icon", {
		[`icon-${color}`]: !!color,
		[`icon-${size}`]: !!size,
	}).join(" "); //`icon icon-${iconType} icon-${iconSize}`

	const render = () => {
		let height;

		switch (size) {
			case "sm":
				height = "20";
				break;
			case "lg":
				height = "42";
				break;
			default:
				height = "28";
		}
		if (!IconPath[name]) {
			return null;
		}
		if (disabled) {
			return (
				<svg
					className={classNameStr + " disabled"}
					viewBox={IconPath[name].viewBox}
					height={height}>
					<path
						fill={color}
						fill-opacity=".25"
						d={IconPath[name].path}
					/>
				</svg>
			);
		} else if (loading) {
			return (
				<svg
					className={classNameStr}
					height={height}
					viewBox={IconPath[name].viewBox}>
					<path fill={color} d={IconPath[name].path}></path>
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 0 0"
						to="360 0 0"
						dur="1s"
						repeatCount="indefinite"
					/>
				</svg>
			);
		} else {
			return (
				<svg
					className={classNameStr}
					viewBox={IconPath[name].viewBox}
					height={height}>
					<path fill={color} d={IconPath[name].path} />
				</svg>
			);
		}
	};

	return render();
};

export default MyIcon;
