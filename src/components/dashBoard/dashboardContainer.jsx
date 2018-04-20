import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { DashboardPresentational } from './dashboardPresentational';

export default class DashBoardContainer extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <DashboardPresentational />
      </div>
    )
  }
}
