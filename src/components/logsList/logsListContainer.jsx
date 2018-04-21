import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LogsListPresentational } from './logsListPresentational';

export class LogsListContainer extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <LogsListPresentational />
            </div>
        )
    }
}
