import react from 'react';
import genClassName from "../../util/genClassName";

export enum alertstyle {
    Large = "lg",
    Small = "sm",
  }


export enum alertsize {
    Primary = 'primary',
    Secondary = 'secondary',
    Success = 'success',
    Danger = 'danger',
    Warning = 'warning',
    Info = 'info',
    Light = 'light',
    Dark = 'dark',
}

interface IAlertsProps {
    alertSize?: alertsize;
    alertStyle?: alertstyle;
    className?: string;
    
}

const MyAlerts: React.FC<IAlertsProps> = (props) => {
    const {children, alertSize, alertStyle} = props;
    const classNames = genClassName('alert ', {
        [`alert-${alertSize}`]: true,
        [`alert-${alertStyle}`]: !!alertStyle,
    }).join(" ");
  
    return (
        <div className={classNames}>{children}</div>
    )
}


export default MyAlerts;