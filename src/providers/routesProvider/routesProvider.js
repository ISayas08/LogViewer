import React from 'react';
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { DashBoardContainer } from '../../components/dashBoard/dashboardContainer';
import { LogsListContainer } from '../../components/logsList/logsListContainer';


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
            { title: 'Home', route: `${this.BASIC_ROUTE}/dashboard`, component: DashBoardContainer },
            { title: 'Logs', route: `${this.BASIC_ROUTE}/logs`, component: LogsListContainer }
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

    getDashboardRoute() {
        return this.routes[0];
    }

    getLogsRoute() {
        return this.routes[1];
    }

    getRoutes() {
        return this.routes;
    }

    getMapedRoutesAsLinks() {
        return this.routes.map((r, i) => <NavLink className='mItem' activeClassName='active' key={i} to={r.route}>
            {r.title}
        </NavLink>)
    }

    getMapedRoutes() {
        return this.routes.map((r, i) => <Route key={i} path={r.route} component={r.component} />);
    }
}