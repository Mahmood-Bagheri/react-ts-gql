import React, { Suspense, FunctionComponent } from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

/* route constants */
import { Routes } from "constants/routes";

const Dashboard = React.lazy(
    () => import(/* webpackChunkName: "viwes-dashboard" */ "./dashboard")
);

const App: FunctionComponent = () => {
    const match = useRouteMatch();

    return (
        <Suspense fallback={<div className="loading" />}>
            <Switch>
                <Redirect exact from={`${match.url}/`} to={Routes.dashboard} />

                <Route path={Routes.dashboard} component={Dashboard} />

                <Redirect to={Routes.error} />
            </Switch>
        </Suspense>
    );
};

export default App;
