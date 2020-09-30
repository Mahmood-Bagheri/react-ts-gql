import React, { ComponentType, FunctionComponent } from "react";

type ShimmerCreatorProps = {
    count?: number;
    component?: ComponentType;
    parentStyle?: string;
};

export const ShimmerCreator: FunctionComponent<ShimmerCreatorProps> = props => {
    const { count = 0, component: Component = null, parentStyle = "" } = props;
    return (
        <div className={parentStyle}>
            {[...new Array(count)].map(index => {
                return <Component key={index} />;
            })}
        </div>
    );
};
