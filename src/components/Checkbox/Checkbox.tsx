import { render } from "@testing-library/react";
import React, { FC, MouseEvent, ReactNode } from "react";
import genClassName from "../../util/genClassName";

export enum CheckSize {
  Large = "lg",
  Small = "sm",
}

export enum CheckColor {
  Red = "red",
  Blue = "blue",
  Black = "black",
}

interface CheckProps {
  checkColor?: CheckColor; 
  checkSize?: CheckSize;
  disabled?: boolean;
  className?: string;
}

const Checkbox: FC<CheckProps> = ({
  children,
  checkColor = CheckColor.Red,
  checkSize = CheckSize.Small,
  disabled = false,
  className = "",
  ...rest
}) => {

  let classNameStr = genClassName(className,
    "cb",
    {
      [`cb-${checkColor}`]: !!checkColor,
      [`cb-${checkSize}`]: !!checkSize,
    },
  ).join(" ");

  const render = () => {
    return (
      <div >
        <input type="checkbox" 
          {...(rest as React.DetailedHTMLProps<
            React.InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
          >)}
          disabled={disabled}
          className={classNameStr}
        >
          {children}
        </input>
      </div>
    );
  }
  return render();
}
export default Checkbox;