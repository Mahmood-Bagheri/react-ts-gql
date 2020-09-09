import React, { Suspense, FunctionComponent } from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

const Dashboard = React.lazy(
    () => import(/* webpackChunkName: "viwes-dashboard" */ "./dashboard")
);

const App: FunctionComponent = () => {
    const match = useRouteMatch();

    return (
        <Suspense fallback={<div className="loading" />}>
            <Switch>
                <Redirect
                    exact
                    from={`${match.url}/`}
                    to={`${match.url}/dashboard`}
                />

                <Route path={`${match.url}/dashboard`} component={Dashboard} />

                <Redirect to="/error" />
            </Switch>
        </Suspense>
    );
};

export default App;
