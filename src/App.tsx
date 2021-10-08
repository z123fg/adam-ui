import React, { ChangeEvent, useState } from "react";
import "./styles/index.scss";
import MyButton, {
  ButtonSize,
  ButtonType,
} from "./components/MyButton/MyButton";
import data from "./components/MyAutoComplete/data.json"
import AutoComplete from "./components/MyAutoComplete/AutoComplete";

function App() {
  const selectHandler = (value:string) => {
    alert(value)
  }

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
      <MyButton href={"https://www.google.com"} buttonType={ButtonType.Link} disabled>Link Button</MyButton>

      <hr />
      <br />
      <div>
        <h1>Auto Complete Search Box</h1>
        <AutoComplete data={data} onSelect={selectHandler} />
      </div>
    </div>
  );
}

export default App;
