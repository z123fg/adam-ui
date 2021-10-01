import React from "react";
import "./styles/index.scss";
import MyButton, {
  ButtonSize,
  ButtonType,
} from "./components/MyButton/MyButton";
import MyLink, { Underline, Variant } from "./components/MyLink/MyLink";

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
      <MyButton >Default Button</MyButton>
      <MyButton buttonType={ButtonType.Primary}>Primary Button</MyButton>
      <MyButton buttonType={ButtonType.Secondary}>Secondary Button</MyButton>
      <MyButton buttonType={ButtonType.Danger}>Danger Button</MyButton>
      <MyButton href={"https://www.google.com"}  buttonType={ButtonType.Link}>Link Button</MyButton>
      <MyButton  href={"https://www.google.com"} buttonType={ButtonType.Link} disabled>Link Button</MyButton>
      <div className = "mylink">
        <h4>Default</h4>
        <MyLink>Default No href</MyLink>
        <MyLink href="#">Default href</MyLink>
        <MyLink target="_blank" href={"https://www.google.com"}>Default href to google</MyLink>
        <MyLink href={"https://www.google.com"} disabled>Disabled</MyLink>
        <MyLink className="link-red">Additional Classname</MyLink>
        <h4>Underline Options</h4>
        <MyLink href="#">Underline</MyLink>
        <MyLink underLine={Underline.None}>No Underline</MyLink>
        <MyLink underLine={Underline.Hover}>Hover</MyLink>
        <h4>Variants</h4>
        <MyLink>Default variant</MyLink>
        <MyLink variant={Variant.Body}>Body variant</MyLink>
        <MyLink variant={Variant.Button}>Button variant</MyLink>
        <MyLink variant={Variant.H1}>H1 variant</MyLink>
        <MyLink variant={Variant.H2}>H2 variant</MyLink>
        <MyLink variant={Variant.H3}>H3 variant</MyLink>
        <MyLink variant={Variant.subtitle}>Subtitle variant</MyLink>
      </div>
    </div>
  );
}

export default App;
