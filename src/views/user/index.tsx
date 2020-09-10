import React, { Suspense, FunctionComponent } from "react";
import { Route, Switch, Redirect, RouteComponentProps } from "react-router-dom";

// * constants
import { appRoutes } from "constants/Routes";

const Login = React.lazy(
    () => import(/* webpackChunkName: "user-login" */ "./login")
);

type UserProps = RouteComponentProps & {};

const User: FunctionComponent<UserProps> = ({ match }) => {
    return (
        <Suspense fallback={<div className="loading" />}>
            <Switch>
                <Redirect
                    exact
                    from={`${match.url}/`}
                    to={appRoutes.user.login}
                />
                <Route path={appRoutes.user.login} component={Login} />

                <Redirect to={appRoutes.error} />
            </Switch>
        </Suspense>
    );
};

export default User;
