import React, { Component } from 'react';

import { DashboardPresentational } from './dashboardPresentational';
import { SideMenuContainer } from '../sideMenu/sideMenuContainer';
import { Log_Provider } from '../../providers/logsProvider/logProvider';
import { LogItemContainer } from '../logItem/logItemContainer';


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
      pageTitle: 'Logs List',
      totalLogList: [],
      viewAs: 'list',
      currentPage: 1,
      limit: 20,
      totalPages: 0
    }
  }


  //=================================================================
  //  LifeCycle.
  //=================================================================

  componentDidMount() {
    this.state._log.getLogsListObservable().subscribe((res) => {
      this.setState({
        totalLogList: res,
        totalPages: Math.ceil(res.length / this.state.limit)
      });
    });
  }


  //=================================================================
  //  Main methods.
  //=================================================================

  mapList = (list) => {
    return list.map((l, i) => <LogItemContainer
      key={i}
      itemAs={this.state.viewAs}
      stateCode={l.cd_cebroker_state}
      proCode={l.pro_cde}
      profession={l.cd_profession}
      licenseId={l.id_license}
      cicleEndDate={l.dt_end}
      status={l.ds_compl_status_returned}
      clientId={l.id_client_nbr}
      startLogDate={l.dt_Start_Log}
      endLogDate={l.dt_end_log}
      enviroment={l.cd_environment}
      machine={l.cd_machine}
      index={(i + 1) + ((this.state.currentPage - 1) * this.state.limit)}
    />);
  }

  applyPagination = (list, page, limit) => list.slice(limit * (page - 1), limit * page);

  //=================================================================
  //  Events.
  //=================================================================

  onPageChange = (newCurrentpageIndex) => {
    this.setState({
      currentPage: newCurrentpageIndex
    })
  }


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
          logs={this.state.totalLogList}
          page={this.state.currentPage}
          limit={this.state.limit}
          applyPagination={this.applyPagination}
          mapList={this.mapList}
          totalPages={this.state.totalPages}
          onPageChange={this.onPageChange}
        />
      </div>
    )
  }
}
