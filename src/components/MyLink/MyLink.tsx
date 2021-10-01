import React, { FC, MouseEvent } from "react";
import genClassName from "../../util/genClassName";

export enum Underline {
    Always = "always",
    Hover = "hover",
    None = "none"
}

export enum Variant {
    Default = "default",
    Body = "body",
    Button = "button",
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    subtitle = "subtitle"
}

interface IMyLinkProps {
    /**
    underline option for MyLink
     */
    underLine?: Underline;
    /**
    variant option for MyLink
     */
    variant?: Variant;
    className?: string;
    /**
    option to disable the link
     */
    disabled?: boolean;
}

type ExtendedMyLink = IMyLinkProps &
    (
        | React.DetailedHTMLProps<
            React.AnchorHTMLAttributes<HTMLAnchorElement>,
            HTMLAnchorElement
        >
    )

const MyLink: FC<ExtendedMyLink> = ({
    children,
    underLine = Underline.Always,
    variant = Variant.Default,
    disabled = false,
    className = "",
    target = "",
    ...rest
}) => {
    let classNameStr = genClassName(className,
        "link",
        {
            [`link-${underLine}`]: !!underLine,
            [`link-${variant}`]: !!variant
        }
    ).join(" ");

    const render = () => {
        if (disabled) {
            classNameStr += " disabled";
            rest.onClick = (e: MouseEvent) => {
                e.preventDefault();
            }
        }

        if (target) {
            console.log(target);

            return (
                <a
                    {...(rest as React.DetailedHTMLProps<
                        React.AnchorHTMLAttributes<HTMLAnchorElement>,
                        HTMLAnchorElement
                    >)}
                    className={classNameStr}
                    target={target}
                    rel="noopener"
                >
                    {children}
                </a>
            )
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
        )
    };

    return render();
};

export default MyLink;