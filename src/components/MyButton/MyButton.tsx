import React, { FC, MouseEvent, ReactNode } from "react";
import genClassName from "../../util/genClassName";

export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}

export enum ButtonType {
  Primary = "primary",
  Secondary = "secondary",
  Danger = "danger",
  Default = "default",
  Link = "link",
}

interface IMyButtonProps {
  buttonType?: ButtonType; //primary danger default
  /** 
  button type for MyButton
   */
  buttonSize?: ButtonSize; //large small
  disabled?: boolean;
  className?: string;
  isDark?:boolean;
}

type ExtendedMyButton = IMyButtonProps &
  (
    | React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >
    | React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >
  );

const MyButton: FC<ExtendedMyButton> = ({
  children,
  buttonType = ButtonType.Default,
  buttonSize = ButtonSize.Small,
  disabled = false,
  className = "",
  isDark=false,
  ...rest
}) => {
    //console.log("className", className);
  let classNameStr = genClassName(className,
    "btn",
    {
        [`btn-dark`]:!!isDark,
      [`btn-${buttonType}`]: !!buttonType,
      [`btn-${buttonSize}`]: !!buttonSize,
    },
    
  ).join(" "); //`btn btn-${buttonType} btn-${buttonSize}`

  const render = () => {
    if (buttonType === ButtonType.Link) {
      if (disabled) {
        classNameStr = classNameStr + " disabled";
        rest.onClick=(e:MouseEvent)=>{
            e.preventDefault()
        }
      }
      
      return (
        <a
          {...(rest as React.DetailedHTMLProps<
            React.AnchorHTMLAttributes<HTMLAnchorElement>,
            HTMLAnchorElement
          >)}
          className={classNameStr}
        >
          {children}
        </a>
      );
    } else {
      return (
        <button
          {...(rest as React.DetailedHTMLProps<
            React.ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
          >)}
          disabled={disabled}
          className={classNameStr}
        >
          {children}
        </button>
      );
    }
  };
  return render();
};
export default MyButton;
