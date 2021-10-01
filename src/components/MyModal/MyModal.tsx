import { FC, useState } from "react";
import myGenClassName from "./util/myGenClassName";

export enum ModalTypes {
  Primary = "primary",
  Secondary = "secondary",
  Danger = "danger",
  Tertiary = "tertiary",
}

export enum SizeTypes {
  Small = "sm",
  Large = "lg",
}

export enum ColorTypes {
  Blue = "blue",
  Red = "red",
  Green = "green",
  White = "white",
  Black = "black",
}

interface Props {
  children?: FC;
  text?: string;
  modalType?: ModalTypes;
  buttonType?: ModalTypes;
  fontColor?: ColorTypes;
  fontSize?: SizeTypes;
  className?: string;
}

interface PrimaryStyling {
  color: string;
  size: string;
  classes: string;
}

type ClassNameGenerator = () => string;

const MyModal:FC<Props> = ({
  children,
  text = "Alert!",
  modalType = ModalTypes.Primary,
  buttonType = ModalTypes.Secondary,
  fontColor = ColorTypes.Black,
  fontSize = SizeTypes.Small,
  className,
}) => {
  const [toggle, setToggle] = useState(true);

  const content = children ? children : <div>{text}</div>;

  const toggleHandler = () => {
    setToggle(false);
  };

  const primaryStyles: PrimaryStyling = {
    color: fontColor ? fontColor : "",
    size: fontSize ? fontSize : "",
    classes: className ? className : "",
  };

  const buttonClassNames: ClassNameGenerator = () => {
    const type = buttonType ? buttonType : "";
    const { color, size } = primaryStyles;
    const newStr = myGenClassName("btn", type, `font-color-${color}`, size, "").join(" ");
    return `btn ${newStr}`;
  };

  const containerClassNames: ClassNameGenerator = () => {
    const type = modalType ? modalType : "";
    const { color, size, classes } = primaryStyles;
    return myGenClassName("mymodal", type, `font-color-${color}`, size, classes).join(" ")
  };

  const buttons = (
    <div className="mymodal-btn-container">
      <button className={buttonClassNames()} onClick={toggleHandler}>
        Confirm
      </button>
    </div>
  );

  const output = (
    <div className="mymodal-backdrop">
      <div className={`mymodal-container ${containerClassNames()}`}>
        {content}
        {buttons}
      </div>
    </div>
  );

  return <>{toggle && output}</>;
}

export default MyModal;