import React from "react";
import "./styles/index.scss";
import MyButton, {
	ButtonSize,
	ButtonType,
} from "./components/MyButton/MyButton";
import MyIcon, { IconSize, IconColor } from "./components/MyIcon/MyIcon";

function App() {
	return (
		<div className="App">
			<h1>Adam UI</h1>
			<h4>Default</h4>
			<MyButton>Default</MyButton>
			<MyButton disabled>Disabled</MyButton>
			<MyButton isDark>Dark Button</MyButton>
			<MyButton className="btn-red">Additional Class Name</MyButton>
			<h4>Sizes</h4>
			<MyButton buttonSize={ButtonSize.Small}>Small Button</MyButton>
			<MyButton buttonSize={ButtonSize.Large}>Large Button</MyButton>
			<h4>Types</h4>
			<MyButton>Default Button</MyButton>
			<MyButton buttonType={ButtonType.Primary}>Primary Button</MyButton>
			<MyButton buttonType={ButtonType.Secondary}>
				Secondary Button
			</MyButton>
			<MyButton buttonType={ButtonType.Danger}>Danger Button</MyButton>
			<MyButton
				href={"https://www.google.com"}
				buttonType={ButtonType.Link}>
				Link Button
			</MyButton>
			<MyButton
				href={"https://www.google.com"}
				buttonType={ButtonType.Link}
				disabled>
				Link Button
			</MyButton>
			{/* <div>
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
			</div> */}
			<div>
				<MyIcon name="home" />
				<MyIcon name="users" size={IconSize.Large} color="blue" />
				<MyIcon name="search" size={IconSize.Large} color="purple" />
				<MyIcon name="star" size={IconSize.Large} color="green" />
				<MyIcon name="moon" size={IconSize.Large} color="grey" />
				<MyIcon name="credit card" size={IconSize.Large} color="teal" />
				<MyIcon name="info" size={IconSize.Large} color="pink" />
				<MyIcon name="check" size={IconSize.Large} color="brown" />
				<MyIcon name="heart" size={IconSize.Large} color="olive" />
			</div>
		</div>
	);
}

export default App;
