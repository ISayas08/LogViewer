import React, { Component } from 'react';

import { DashboardPresentational } from './dashboardPresentational';
import { SideMenuContainer } from '../sideMenu/sideMenuContainer';

export class DashBoardContainer extends Component {

  //=================================================================
  //  Constructor.
  //=================================================================

  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: true
    }
  }

  //=================================================================
  //  Main methods.
  //=================================================================

  //=================================================================
  //  Events.
  //=================================================================

  //=================================================================
  //  Render.
  //=================================================================

  toggleSideMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  }

  render() {
    return (
      <div>
        <SideMenuContainer
          isMenuOpen={this.state.isMenuOpen}
          toggleSideMenu={this.toggleSideMenu}
        />
        <DashboardPresentational
          isMenuOpen={this.state.isMenuOpen}
          toggleSideMenu={this.toggleSideMenu}
        />
      </div>
    )
  }
}
