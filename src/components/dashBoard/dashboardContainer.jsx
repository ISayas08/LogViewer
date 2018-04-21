import React, { Component } from 'react';

import { DashboardPresentational } from './dashboardPresentational';
import { SideMenuContainer } from '../sideMenu/sideMenuContainer';
import { Log_Provider } from '../../providers/logsProvider/logProvider';


export class DashBoardContainer extends Component {

  //=================================================================
  //  Constructor.
  //=================================================================

  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: true,
      isLoading: true,
      _log: new Log_Provider(),
      pageTitle: 'Logs'
    }
  }


  //=================================================================
  //  LifeCycle.
  //=================================================================

  componentDidMount() {
    this.state._log.getLogsListObservable().subscribe((res) => {
      console.log(res);
    })
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
          pageTitle={this.state.pageTitle}
        />
      </div>
    )
  }
}
