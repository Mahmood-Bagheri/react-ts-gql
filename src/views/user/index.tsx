import React, { Suspense, FunctionComponent } from "react";
import { Route, Switch, Redirect, RouteComponentProps } from "react-router-dom";

/* route constants */
import { Routes } from "constants/routes";

const Login = React.lazy(
    () => import(/* webpackChunkName: "user-login" */ "./login")
);

type UserProps = RouteComponentProps & {};

const User: FunctionComponent<UserProps> = ({ match }) => {
    return (
        <Suspense fallback={<div className="loading" />}>
            <Switch>
                <Redirect exact from={`${match.url}/`} to={Routes.login} />

                <Route path={Routes.login} component={Login} />

                <Redirect to={Routes.error} />
            </Switch>
        </Suspense>
    );
};

export default User;
