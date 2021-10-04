import React, { FC} from "react";
import genClassName from "../../util/genClassName";

export enum CheckboxSize {
  Large = "lg",
  Small = "sm",
}


export enum CheckboxColor {
  Red = "red",
  Green = 'green',
  Blue = 'blue',
  Yellow = 'yellow'
}

interface IMyCheckboxProps {
  /**
  Different sizes for MyCheckbox
   */
  checkboxSize?: CheckboxSize;
  /**
  Different colors for MyCheckbox
   */
  checkboxColor?: CheckboxColor; 
  /**
  Diabled checkbox, cannot click it.
   */
  disabled?: boolean;
  /**
  Self-defined class name.
   */
  className?: string;
  /**
  Default checked. Can change later.
   */
  defaultCheck?:boolean;
  
}

let MyCheckbox: FC<IMyCheckboxProps>  = ({
  checkboxSize = CheckboxSize.Small,
  checkboxColor,
  disabled = false,
  className = '',
  defaultCheck = false,
  ...rest
}) => {
  let classNameStr = genClassName(
    'checkbox',
    {
      [`checkbox-${checkboxSize}`]: !!checkboxSize,
      [`checkbox-${checkboxColor}`]: !!checkboxColor,
    } , className
  ).join(' ')
  // `checkbox checkbox-${checkboxType} checkbox-${checkboxSize} checkbox-${checkboxColor}`
  let render = () => {
    if(disabled){
      return <input
        {...rest as React.DetailedHTMLProps<
          React.InputHTMLAttributes<HTMLInputElement>,
          HTMLInputElement
        >}
      disabled={disabled} 
      className={classNameStr} 
      type='checkbox' />
    }else{
      if(defaultCheck){
        return <input
          {...rest as React.DetailedHTMLProps<
            React.InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
          >}
          defaultChecked
          className={classNameStr}
          type='checkbox' />
      }else{
        return <input 
          {...rest as React.DetailedHTMLProps<
            React.InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
          >}
        className={classNameStr} 
        type='checkbox' />
      }
    }
  }
  
  return render()
}
export default MyCheckbox;
