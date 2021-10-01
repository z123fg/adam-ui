import React, { FC, MouseEvent, ReactNode, useState } from "react"

export enum InputStyle {
  Default = "input-default",
  Outline = "input-outline",
  Filled = "input-filled",
}
export enum InputSize {
  Large = "input-large",
  Small = "input-small",
}
export enum InputType {
  Number = "number",
  Email = "email",
  Password = "password",
  Radio = "radio",
  Text = "text",
  File = "file",
}

type OnChangeFn = (e: any) => void
interface IMyInputProps {
  inputStyle?: InputStyle
  inputSize?: InputSize
  inputType?: InputType
  inputName?: string | undefined
  onChange?: OnChangeFn
  ReadOnly?: boolean | undefined
  className?: string
  value?: string | number
}

const MyInput: FC<IMyInputProps> = ({
  children,
  inputStyle = InputStyle.Default,
  inputSize = InputSize.Small,
  inputType = InputType.Text,
  inputName,
  ReadOnly = false,
  onChange,
  className = "",
  value,
  ...rest
}) => {
  const [inputVal, setInputVal] = useState(value)
  let classNameStr: string = "my-input"
  if (inputType === "file") {
    classNameStr = classNameStr + " file"
    return <input type={inputType} name={inputName} className={classNameStr} />
  }

  classNameStr = `${classNameStr} ${inputStyle} ${inputSize} ${className}`
  console.log(value)
  const render = () => {
    if (ReadOnly) {
      return (
        <input
          type={inputType}
          name={inputName}
          value={value}
          className={classNameStr}
          readOnly
        />
      )
    } else {
      return (
        <input
          type={inputType}
          name={inputName}
          value={inputVal}
          className={classNameStr}
          onChange={(e) => setInputVal(e.target.value)}
        />
      )
    }
  }
  return render()
}
export default MyInput
