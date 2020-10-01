import React, { FunctionComponent, HtmlHTMLAttributes } from "react";

type ShimmerCreatorProps = {
    count?: number;
    component?: React.FunctionComponent<HtmlHTMLAttributes<HTMLElement>>;
    parentStyle?: string;
    componentStyle?: string;
};

export const ShimmerCreator: FunctionComponent<ShimmerCreatorProps> = props => {
    const {
        count = 0,
        component: Component = null,
        parentStyle = "",
        componentStyle = "",
    } = props;

    return (
        <div className={parentStyle}>
            {[...new Array(count)].map(index => {
                return <Component className={componentStyle} key={index} />;
            })}
        </div>
    );
};
