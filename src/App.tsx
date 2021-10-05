import React from "react";
import "./styles/index.scss";
import MyButton, {
  ButtonSize,
  ButtonType,
} from "./components/MyButton/MyButton";
import AnimatedHoverCard, {
  CardType,
  CardStyle,
} from "./components/AnimatedHoverCard/AnimatedHoverCard";
import img from "./components/AnimatedHoverCard/img/img1.png";

function App() {
  return (
    <div className="App">
      {/* <h1>Adam UI</h1>
      <h4>Default</h4>
      <MyButton>Default</MyButton>
      <MyButton disabled>Disabled</MyButton>
      <MyButton isDark>Dark Button</MyButton>
      <MyButton className="btn-red">Additional Class Name</MyButton>
      <h4>Sizes</h4>
      <MyButton buttonSize={ButtonSize.Small}>Small Button</MyButton>
      <MyButton buttonSize={ButtonSize.Large}>Large Button</MyButton>
      <h4>Types</h4>
      <MyButton >Default Button</MyButton>
      <MyButton buttonType={ButtonType.Primary}>Primary Button</MyButton>
      <MyButton buttonType={ButtonType.Secondary}>Secondary Button</MyButton>
      <MyButton buttonType={ButtonType.Danger}>Danger Button</MyButton>
      <MyButton href={"https://www.google.com"}  buttonType={ButtonType.Link}>Link Button</MyButton>
      <MyButton  href={"https://www.google.com"} buttonType={ButtonType.Link} disabled>Link Button</MyButton> */}
      <AnimatedHoverCard
        // ImgContainerClassName={{ width: "10px" }}
        imgSrc={img}
        cardStyle={CardStyle.Style1}
        cardType={CardType.Text}
        title="test title"
        description="test para"
        // titleClassName={{ width: "10px" }}
        // descriptionClassName={{ width: "10px" }}
        PatternColor1="white"
        PatternColor2="black"
        cardContainerPadding="2rem"
        ImageHeight="80%"
        CardWidth="300px"
        CardHeight="400px"
      />
    </div>
  );
}

export default App;
