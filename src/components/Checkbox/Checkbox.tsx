import React from 'react'
import { FC, MouseEvent } from "react";
import { classNames } from "../../utils/classNames";

export enum CheckboxSize {
    Large = "lg",
    Small = "sm",
}

export enum CheckboxType {
    Default = "default",
    Primary = "primary",
    Secondary = "secondary",
}

export interface CheckboxProps {
    className?: string;
    checkboxSize?: CheckboxSize;
    checkboxType?: CheckboxType;
    disabled?: boolean;
    isDark?: boolean;
    checked?: boolean;
}

export type MyCheckboxProps = CheckboxProps &
  (
    | React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >
    | React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >
  );


const Checkbox: FC<MyCheckboxProps> = (props) => {
    // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    let { checkboxSize, checkboxType, disabled, isDark, checked, ...rest } = props;
    let styleClasses = classNames('cbx', {
        [`cbx-${checkboxSize}`]: !!checkboxSize,
        [`cbx-${checkboxType}`]: !!checkboxType,
        'cbx-checked': !!checked,
        'cbx-disabled': !!disabled,
        'cbx-dark': !!isDark,
    }
    )
    
    if (disabled) {
        styleClasses += " disabled";
        rest.onClick = (e: MouseEvent) => {
            e.preventDefault();
        };
    }
    
    console.log(styleClasses);
    return <input type="checkbox" className={styleClasses} {...(rest as React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement>)}></input>

}
export default Checkbox;