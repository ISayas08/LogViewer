import React from 'react';
import { Route } from "react-router-dom";

import { DashboardPresentational } from "../../components/dashBoard/dashboardPresentational";
import { LogsListPresentational } from "../../components/logsList/logsListPresentational";

let instance = null;
export class Route_provider {

    constructor() {
        //Make this clases a singleton.
        if (!instance) {
            instance = this;
        }

        //Variables
        this.BASIC_ROUTE = '/log-viewer';
        this.routes = [
            { route: `${this.BASIC_ROUTE}/logs`, component: LogsListPresentational },
            { route: `${this.BASIC_ROUTE}/dashboard`, component: DashboardPresentational }
        ]

        //Return always the same instance.
        return instance
    }

    //====================================================================
    //  Getters
    //====================================================================

    getBasicRoute() {
        return this.BASIC_ROUTE;
    }

    getLogsRoute() {
        return this.routes[0];
    }

    getDashboardRoute() {
        return this.routes[1];
    }

    getRoutes() {
        return this.routes;
    }

    getMapedRoutes() {
        return this.routes.map((r, i) => <Route key={i} path={r.route} component={r.component} />);
    }
}