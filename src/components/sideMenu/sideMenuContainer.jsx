import React from 'react';
import PropTypes from 'prop-types';

import { SideMenuPresentational } from './sideMenuPresentational';

export class SideMenuContainer extends React.Component {
    static propTypes = {
        prop: PropTypes
    }

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return <div>
            <SideMenuPresentational />
        </div>;
    }
}