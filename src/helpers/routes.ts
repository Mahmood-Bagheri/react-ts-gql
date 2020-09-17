import _ from "lodash";
import { Routes } from "constants/routes";

type GetRoutePathProps = keyof typeof Routes;

export const getRoute = (path: GetRoutePathProps, params: string[] = []) => {
    if (params) {
        return appendRouteParam(_.get(Routes, path), params);
    }
    return _.get(Routes, path);
};

const appendRouteParam = (route: string, routeParamValues: string[]) => {
    let mainParams = route.split("/");

    let routesWithoutIndexes = mainParams
        .map((mainParam, index) => {
            if (mainParam.indexOf(":") < 0) {
                return { param: mainParam, index };
            }
        })
        .filter(Boolean);

    let routesWithIndexes = mainParams
        .map((mainParam, index) => {
            if (mainParam.indexOf(":") >= 0) {
                return { param: mainParam, index };
            }
        })
        .filter(Boolean);

    if (routesWithIndexes.length !== routeParamValues.length) {
        throw new Error("Route params length mismatch");
    }

    let createdRouteWithProvidedParams: string[] = [];

    routesWithIndexes.map((routeWithIndex, index) => {
        createdRouteWithProvidedParams[routeWithIndex.index] =
            routeParamValues[index];
    });

    routesWithoutIndexes.map((routeWithoutIndex, index) => {
        createdRouteWithProvidedParams[routeWithoutIndex.index] =
            routeWithoutIndex.param;
    });

    return createdRouteWithProvidedParams.join("/");
};
