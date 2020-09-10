import React, { Suspense, FunctionComponent } from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

import { appRoutes, appSectionsPrefix } from "constants/Routes";

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
                    to={appRoutes.dashboard.intro}
                />

                <Route path={appRoutes.dashboard.intro} component={Intro} />

                <Redirect to={appRoutes.error} />
            </Switch>
        </Suspense>
    );
};

export default Dashboard;
