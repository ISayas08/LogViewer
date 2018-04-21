import React from 'react';
import PropTypes from 'prop-types';

import { SideMenuPresentational } from './sideMenuPresentational';
import { Route_provider } from '../../providers/routesProvider/routesProvider';
import { Resource_provider } from '../../providers/resourceProvider/resourceProvider';

export class SideMenuContainer extends React.Component {

    static propTypes = {
        isMenuOpen: PropTypes.bool,
        toggleSideMenu: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            routeProvider: new Route_provider(),
            _R: new Resource_provider()
        };
    }

    getLiks() {

    }

    render() {
        return <div>
            <SideMenuPresentational
                {...this.props}
                links={this.state.routeProvider.getMapedRoutesAsLinks()}
                _R={this.state._R}
            />
        </div>;
    }
}