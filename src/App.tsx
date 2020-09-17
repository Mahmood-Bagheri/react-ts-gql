import React, { Suspense, FunctionComponent } from "react";

// * modules
import { Router, Switch, Route, Redirect } from "react-router-dom";

/* route constants */
import { Routes } from "constants/routes";

// * services
import { AuthRoute } from "services/auth/AuthRoute";

// * helpers
import { history } from "helpers/history";
import { hot } from "react-hot-loader/root";

const ViewMain = React.lazy(
    () => import(/* webpackChunkName: "views" */ "./views")
);

const ViewApp = React.lazy(
    () => import(/* webpackChunkName: "views-app" */ "./views/app")
);

const ViewUser = React.lazy(
    () => import(/* webpackChunkName: "views-user" */ "./views/user")
);

const ViewError = React.lazy(
    () => import(/* webpackChunkName: "views-error" */ "./views/error")
);

const App: FunctionComponent = () => {
    /*
     * we have to read this part from a context or something like that
     */
    const auth = true;

    return (
        <React.Fragment>
            <Suspense fallback={<div className="loading" />}>
                <Router history={history}>
                    <Switch>
                        <AuthRoute
                            path={Routes.app}
                            authUser={auth}
                            component={ViewApp}
                        />
                        <Route
                            path={Routes.user}
                            render={props => <ViewUser {...props} />}
                        />
                        <Route
                            path={Routes.error}
                            exact
                            component={ViewError}
                        />

                        <Route path="/" exact component={ViewMain} />

                        <Redirect to={Routes.error} />
                    </Switch>
                </Router>
            </Suspense>
        </React.Fragment>
    );
};

export default hot(App);
