import "./styles/index.scss"
import MyInput, {
  InputSize,
  InputStyle,
  InputType,
} from "./components/MyInput/MyInput"
function BaoUI() {
  return (
    <>
      <h1>Bao UI</h1>
      <h4>Basic Text Field</h4>
      <MyInput
        inputType={InputType.Text}
        value={"Default"}
        inputStyle={InputStyle.Default}
        className=""
      />
      <MyInput
        inputType={InputType.Text}
        value={"Outline"}
        inputStyle={InputStyle.Outline}
        className=""
      />
      <MyInput
        inputType={InputType.Text}
        value={"Filled"}
        inputStyle={InputStyle.Filled}
        className=""
      />
      <h4>Input Types</h4>
      <MyInput inputType={InputType.Number} value={10} />
      <MyInput inputType={InputType.Password} value={"sadasdasdsa"} />
      <MyInput inputType={InputType.Email} value={"example@gmail.com"} />
      <MyInput inputType={InputType.Radio} />
      <MyInput inputType={InputType.File} />
      <h4>Read Only</h4>
      <MyInput
        inputType={InputType.Text}
        ReadOnly
        value={"This is a Read Only "}
      />
      <MyInput
        inputType={InputType.Text}
        ReadOnly
        inputStyle={InputStyle.Outline}
        value={"This is a Read Only "}
      />
      <h4>Input Sizes</h4>
      <MyInput
        inputType={InputType.Text}
        value={"Small"}
        inputStyle={InputStyle.Filled}
        className=""
      />
      <MyInput
        inputType={InputType.Text}
        value={"Large"}
        inputSize={InputSize.Large}
        inputStyle={InputStyle.Filled}
        className=""
      />
      <h4>Input States</h4>
      <MyInput
        inputType={InputType.Text}
        value={"Success"}
        inputSize={InputSize.Large}
        className="input-success"
      />
      <MyInput
        inputType={InputType.Text}
        value={"Fail"}
        inputSize={InputSize.Large}
        className="input-fail"
      />
    </>
  )
}

export default BaoUI
