import "./styles/index.scss";
import MyCheckbox, { 
  CheckboxColor, 
  CheckboxSize 
} from "./components/MyCheckbox/MyCheckbox";

function App() {
  return (
    <div className="App">
      <h1>Adam UI</h1>
      <h4>Sizes</h4>
      <MyCheckbox checkboxSize={CheckboxSize.Small} />Small&nbsp;&nbsp;
      <MyCheckbox checkboxSize={CheckboxSize.Large} />Large
      <h5></h5>
      <h4>DefaultCheck</h4>
      <MyCheckbox />Default&nbsp;&nbsp;
      <MyCheckbox defaultCheck />DefaultCheck
      <h5></h5>
      <h4>Disabled</h4>
      <MyCheckbox />Default&nbsp;&nbsp;
      <MyCheckbox disabled />Disabled
      <h5></h5>
      <h4>Colors</h4>      
      <MyCheckbox defaultCheck checkboxColor={CheckboxColor.Red} />Red&nbsp;&nbsp;
      <MyCheckbox defaultCheck checkboxColor={CheckboxColor.Green} />Green&nbsp;&nbsp;
      <MyCheckbox defaultCheck checkboxColor={CheckboxColor.Blue} />Blue&nbsp;&nbsp;
      <MyCheckbox defaultCheck checkboxColor={CheckboxColor.Yellow} />Yellow&nbsp;&nbsp;
    </div>
  );
}

export default App;
