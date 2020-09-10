import React, { Suspense, FunctionComponent } from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

// * constants
import { appRoutes, appSectionsPrefix } from "constants/Routes";

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
                    to={appSectionsPrefix.dashboard}
                />

                <Route
                    path={appSectionsPrefix.dashboard}
                    component={Dashboard}
                />

                <Redirect to={appRoutes.error} />
            </Switch>
        </Suspense>
    );
};

export default App;
