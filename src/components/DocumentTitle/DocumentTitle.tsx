import React, { FunctionComponent } from "react";

// * components
import { Helmet, HelmetProps } from "react-helmet";

export const DocumentTitle: FunctionComponent<HelmetProps> = props => {
    return <Helmet {...props}></Helmet>;
};
