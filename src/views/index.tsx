import React, { FunctionComponent } from "react";
import { Redirect } from "react-router-dom";

// * constants
import { appPrefix } from "constants/Routes";

const Main: FunctionComponent = () => {
    return <Redirect to={appPrefix} />;
};

export default Main;
