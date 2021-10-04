import React from "react";
import "./styles/index.scss";
import MyButton, {
  ButtonSize,
  ButtonType,
} from "./components/MyButton/MyButton";

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
      <h3>Checkbox Component</h3>
      <h4>Sizes</h4>
      <Checkbox></Checkbox>
      <Checkbox checkboxSize={CheckboxSize.Large}></Checkbox>
      <Checkbox checkboxSize={CheckboxSize.Small}></Checkbox>
      <h4>Types</h4>
      <Checkbox checkboxType={CheckboxType.Primary}></Checkbox>
      <Checkbox checkboxType={CheckboxType.Secondary}></Checkbox>
      <Checkbox disabled></Checkbox>
      <h4>Dark</h4>
      <Checkbox isDark></Checkbox>
      <Checkbox checked></Checkbox>
    </div>
  );
}

export default App;
