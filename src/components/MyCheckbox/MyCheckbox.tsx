import React, { FC, MouseEvent, ReactNode } from "react";
import genClassName from "../../util/genClassName";

export enum CheckboxSize {
  Large = "lg",
  Small = "sm",
}

export enum CheckboxType {
  Primary = "primary",
  Secondary = "secondary",
  Danger = "danger",
  Default = "default",
  Link = "link",
}

interface IMyButtonProps {
  checkboxType?: CheckboxType; 
  checkboxSize?: CheckboxSize; 
  disabled?: boolean;
  className?: string;
  isDark?: boolean;
}

const MyCheckbox: FC<IMyButtonProps> = ({
  children, 
  checkboxType = CheckboxType.Default, 
  checkboxSize = CheckboxSize.Small}) => {
  const classNameStr = `checkbox checkbox-${checkboxType} checkbox-${checkboxSize}`
  return(
    
    <input className={classNameStr} type='checkbox'/>
  )
}
export default MyCheckbox;
