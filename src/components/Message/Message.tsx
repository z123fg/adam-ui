import { padding } from '@mui/system';
import React, { FC, useState } from 'react';
import genClassName from "../../util/genClassName";
import "./_message.scss"

//big small message
export enum MessageSize {
  Large = "lg",
  Small = "sm",
}

//text color change
export enum MessageColor {
  Black = "black",
  Red = "red",
  Blue = "blue",
}

//background and border color change
export enum MessageType {
  Urgent = "urgent",
  Default = "default",
}

interface IMessagesProps {
    className?: string;
    msgType?: MessageType;
    msgSize?: MessageSize;
    msgColor?: MessageColor;
    msgContent?: string;
    msgClick?: boolean; //false for a auto delete message(alert), true for click delete
}

export const Message: FC<IMessagesProps> = ({
    className = "", 
    msgType=MessageType.Default,
    msgSize=MessageSize.Small, 
    msgColor = MessageColor.Black,
    msgContent = "",
    msgClick=false,
        ...rest 
}) => {

    let classNameStr = genClassName(className,
        "msg",
        {
            [`msg-still`]:!!msgClick,
        [`msg-${msgType}`]: !!msgType,
        [`msg-${msgSize}`]: !!msgSize,
        [`msg-${msgColor}`]: !!msgColor,
    }  ).join(" ");


    const [show, setShow] = useState(msgClick);
    const [appear, setAppear] = useState(true);

    let autoMsg = (
        <div className={classNameStr} {...(rest as IMessagesProps)}
            data-testid='message-element'>
            <div className='content'>
                <p>{msgContent}</p>
            </div>
        </div >    
    )
        
    setTimeout(() => {
        setAppear(false)
    }, 2000);

    if (msgClick) {
        if (show) {
            return (
                <div className={classNameStr} {...(rest as IMessagesProps)}
                    data-testid='message-element'
                    onClick={(e) => {
                        e.preventDefault();
                        setShow(false);
                    }}>
                    <div style={{ textAlign: "right", margin: "-10px 0px -5px 0px", cursor:"pointer" }}>X</div>
                    <div className='content'>
                        <p>{msgContent}</p>
                    </div>
                </div >        
            );
        } else return null
    }

    if(appear) {
        return autoMsg;
    }

    return (
        null
    )

};

export default Message;