import { FC, useState } from "react";
import myGenClassName from "./util/myGenClassName";

enum ModalTypes {
  Primary = "primary",
  Secondary = "secondary",
  Danger = "danger",
  Default = "default",
}

enum SizeTypes {
  Small = "sm",
  Large = "lg",
}

interface Props {
  children?: FC;
  text?: string;
  modalType?: ModalTypes;
  buttonType?: ModalTypes;
  fontColor?: ModalTypes;
  fontSize?: SizeTypes;
  className?: string;
}

interface PrimaryStyling {
  color: string;
  size: string;
  classes: string;
}

type ClassNameGenerator = () => string;

export default function MyModal({
  children,
  text = "Alert!",
  modalType = ModalTypes.Default,
  buttonType = ModalTypes.Default,
  fontColor = ModalTypes.Default,
  fontSize = SizeTypes.Small,
  className,
}: Props) {
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
    const newStr = myGenClassName("btn", type, color, size, "").join(" ");
    return `btn ${newStr}`;
  };

  const containerClassNames: ClassNameGenerator = () => {
    const type = modalType ? modalType : "";
    const { color, size, classes } = primaryStyles;
    return myGenClassName("mymodal", type, color, size, classes).join(" ")
  };

  const buttons = (
    <div>
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
