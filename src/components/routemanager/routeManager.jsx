import React from 'react';
import { Switch, Redirect } from "react-router-dom";
import { Route_provider } from '../../providers/routesProvider/routesProvider';

export class RouteManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            routeProvider: new Route_provider()
        }
    }

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