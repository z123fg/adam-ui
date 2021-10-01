import React, { ChangeEvent, useState } from "react";
import "./styles/index.scss";
import MyButton, {
  ButtonSize,
  ButtonType,
} from "./components/MyButton/MyButton";

import AutoComplete from "./components/MySearchBox/AutoComplete";
import PokeAPI from "./components/MySearchBox/PokeAPI";

function App() {
  const pokeAPI = PokeAPI();
  const data = pokeAPI.props.children.props.children;

  const [searchInput, setSearchInput] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
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
        <AutoComplete items={data} value={searchInput} onChange={onChange} />
      </div>
    </div>
  );
}

export default App;
