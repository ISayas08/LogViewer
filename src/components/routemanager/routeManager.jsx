import React from 'react';
import { Switch, Redirect } from "react-router-dom";

import { Route_provider } from '../../providers/routesProvider/routesProvider';
import { Log_Provider } from '../../providers/logsProvider/logProvider';
import { Search_Provider } from '../../providers/searchFilterConfigProvider/searchFilterConfigProvider';

export class RouteManager extends React.Component {

    //============================================================
    //  Constructor.
    //============================================================
    constructor(props) {
        super(props);

        this.state = {
            _log: new Log_Provider(),
            _searchConfig: new Search_Provider(),
            routeProvider: new Route_provider(),
        }
    }

    //============================================================
    //  LifeCycle.
    //============================================================

    componentDidMount() {
        this.state._searchConfig.getParams().subscribe(data => {
            this.state._log.loadLogs(data);
        });
    }

    //============================================================
    //  Render.
    //============================================================

    render() {
        return <div>
            <Switch>
                {/* Load all routes as Route component */}
                {this.state.routeProvider.getMapedRoutes()}

                {/*To define default route*/}
                <Redirect from='*' to={this.state.routeProvider.getDashboardRoute().route} />
            </Switch>
        </div>;
    }
}