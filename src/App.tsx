import React from "react";
import "./styles/index.scss";
import MyButton, {
  ButtonSize,
  ButtonType,
} from "./components/MyButton/MyButton";
import MyAlerts, { alertsize, alertstyle }from "./components/MyAlerts/MyAlerts";

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

      <h2> Alerts Style </h2>
      <MyAlerts > A simple Default alert—check it out!</MyAlerts>
      <MyAlerts alertSize={alertsize.Primary}  > A simple Primary alert—check it out!</MyAlerts>
      <MyAlerts alertSize={alertsize.Secondary}  > A simple Secondary alert—check it out!</MyAlerts>
      <MyAlerts alertSize={alertsize.Success}> A simple Success alert—check it out!</MyAlerts>
      <MyAlerts alertSize={alertsize.Danger}> A simple Danger alert—check it out!</MyAlerts>
      <MyAlerts alertSize={alertsize.Warning}> A simple Warning alert—check it out!</MyAlerts>
      <MyAlerts alertSize={alertsize.Info}> A simple Info alert—check it out!</MyAlerts>
      <MyAlerts alertSize={alertsize.Light}> A simple Light alert—check it out!</MyAlerts>
      <MyAlerts alertSize={alertsize.Dark}> A simple Dark alert—check it out!</MyAlerts>
      <h1> Different Size</h1>
      <MyAlerts alertSize={alertsize.Primary} alertStyle={alertstyle.Large}> A simple Primary alert—check it out!</MyAlerts>
      <MyAlerts alertSize={alertsize.Secondary} alertStyle={alertstyle.Small}> A simple Secondary alert—check it out!</MyAlerts>

    </div>
  );
}

export default App;
