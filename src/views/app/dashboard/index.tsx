import React, { Suspense, FunctionComponent } from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

/* route constants */
import { Routes } from "constants/routes";

const Intro = React.lazy(
    () => import(/* webpackChunkName: "viwes-dashboard-intro" */ "./Intro")
);

const Dashboard: FunctionComponent = () => {
    const match = useRouteMatch();

    return (
        <Suspense fallback={<div className="loading" />}>
            <Switch>
                <Redirect
                    exact
                    from={`${match.url}/`}
                    to={Routes.dashboardIntro}
                />

                <Route path={Routes.dashboardIntro} component={Intro} />

                <Redirect to={Routes.error} />
            </Switch>
        </Suspense>
    );
};

export default Dashboard;
