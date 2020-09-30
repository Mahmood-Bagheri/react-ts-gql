import React from "react";
import classnames from "classnames";

// * these are the base custom button props
type ButtonSizeType = "xs" | "sm" | "md" | "lg" | "xl";
type ButtonTypeType =
    | "primary"
    | "info"
    | "light-info"
    | "warning"
    | "danger"
    | "success"
    | "dark-info"
    | "default";

type ButtonExtraProps = {
    size: ButtonSizeType;
    type: ButtonTypeType;
    block: boolean;
    rounded: boolean;
};

// * integrate HTML button props with our custom props
export type ButtonProps = Omit<
    React.HtmlHTMLAttributes<HTMLButtonElement>,
    keyof ButtonExtraProps
> &
    Partial<ButtonExtraProps>;

const defaultProps: ButtonProps = {
    size: "sm",
    type: "default",
    block: false,
    rounded: true,
};

export const Button: React.FC<ButtonProps> = props => {
    // * destruct needed props
    const {
        size,
        type,
        block,
        rounded,
        className: nativeClassName,
        ...restProps
    } = props;

    // * switch on the types and make suitable size & types
    let sizeClassname = makeSize(size);
    let typeClassname = makeType(type);

    // * check if our button is fullwidth or rounded
    let blockClassname = block ? "w-full" : "";
    let roundedClassname = rounded ? "rounded-full" : "";

    const classNames = [
        nativeClassName,
        sizeClassname,
        typeClassname,
        blockClassname,
        roundedClassname,
    ];

    // * render the button 🔥
    return (
        <button
            data-testid="btn"
            className={classnames(classNames)}
            {...restProps}
        />
    );
};

function makeSize(size: ButtonSizeType) {
    switch (size) {
        case "xs":
            return ["px-2", "py-1", "text-xs"];

        case "sm":
            return ["p-4", "py-2", "text-sm"];

        case "md":
            return ["p-6", "py-3", "text-md"];

        case "lg":
            return ["p-8", "py-4", "text-lg"];

        case "xl":
            return ["p-10", "py-5", "text-xl"];

        // sm by default
        default:
            return ["p-4", "py-2", "text-sm"];
    }
}

function makeType(type: ButtonTypeType) {
    switch (type) {
        case "default":
            return ["bg-white", "text-black"];

        case "danger":
            return ["text-white", "bg-red"];

        case "info":
            return ["text-white", "bg-blue-700"];

        case "light-info":
            return ["text-black", "bg-light-blue"];

        case "primary":
            return ["text-white", "bg-blue"];

        case "success":
            return ["text-white", "bg-green"];

        case "warning":
            return ["text-white", "bg-orange"];

        case "dark-info":
            return ["text-white", "bg-dark-blue"];

        // default button type, the most simple 🎈

        default:
            return ["bg-white", "text-black"];
    }
}
