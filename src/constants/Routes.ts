const appPrefix = "/app";

const appSectionsPrefix = {
    user: "/user",
    error: "/error",
    dashboard: `${appPrefix}/dashboard`,
};

const appRoutes = {
    dashboard: {
        intro: `${appSectionsPrefix.dashboard}/intro`,
    },

    user: {
        login: `${appSectionsPrefix.user}/login`,
    },

    error: `${appSectionsPrefix.error}`,
};

export { appPrefix, appSectionsPrefix, appRoutes };
