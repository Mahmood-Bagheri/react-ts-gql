import React, { Suspense, FunctionComponent } from "react";
import { Route, Switch, Redirect, RouteComponentProps } from "react-router-dom";

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
                    to={`${match.url}/login`}
                />
                <Route path={`${match.url}/login`} component={Login} />

                <Redirect to="/error" />
            </Switch>
        </Suspense>
    );
};

export default User;
