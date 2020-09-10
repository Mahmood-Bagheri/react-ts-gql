import React, { Suspense, FunctionComponent } from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

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
                    to={`${match.url}/intro`}
                />

                <Route path={`${match.url}/intro`} component={Intro} />

                <Redirect to="/error" />
            </Switch>
        </Suspense>
    );
};

export default Dashboard;
