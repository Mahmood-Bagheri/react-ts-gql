import React, { FunctionComponent } from "react";
import { Redirect } from "react-router-dom";

/* route constants */
import { Routes } from "constants/routes";

const Main: FunctionComponent = () => {
    return <Redirect to={Routes.app} />;
};

export default Main;
