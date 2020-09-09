import React from "react";

// * modules
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { FunctionComponent, ComponentType } from "react";

type AuthRouteProps = {
    path: string;
    component: ComponentType<RouteComponentProps>;
    authUser: boolean;
};

export const AuthRoute: FunctionComponent<AuthRouteProps> = ({
    component: Component,
    authUser,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props =>
                authUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/user/login",
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};
