import React, { Component } from 'react';

import { DashboardPresentational } from './dashboardPresentational';
import { SideMenuContainer } from '../sideMenu/sideMenuContainer';
import { Log_Provider } from '../../providers/logsProvider/logProvider';
import { LogItemContainer } from '../logItem/logItemContainer';
import { Search_Provider } from '../../providers/searchFilterConfigProvider/searchFilterConfigProvider';

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
      _searchOption: new Search_Provider(),
      pageTitle: 'Logs List',
      totalLogList: [],
      currentPage: 1,
      limit: 20,
      totalPages: 0,
      sortParams: [],
      states: []
    }
  }

  //=================================================================
  //  LifeCycle.
  //=================================================================

  componentDidMount() {
    this.state._log.getIsLoad().subscribe(loading => {
      this.setState({
        isLoading: loading
      });
    });

    this.state._log.getLogsListObservable().subscribe((res) => {
      this.setState({
        totalLogList: res,
        totalPages: Math.ceil(res.length / this.state.limit)
      }, () => {
        this.setOptionsValues();
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

  setOptionsValues() {
    if (this.state.totalLogList.length > 0) {
      let aux = [];
      for (let key in this.state.totalLogList[0]) {
        aux.push(key);
      }

      this.state._searchOption.setSortParams(aux);

      this.state._searchOption.getSortParam().subscribe(param => {
        let aux = this.state.totalLogList.sort((a, b) => {
          let x = a[param];
          let y = b[param];
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });

        this.setState({
          totalLogList: aux
        })
      })
    }
  }
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
          pageTitle={this.state.pageTitle}
          //Menu
          isMenuOpen={this.state.isMenuOpen}
          toggleSideMenu={this.toggleSideMenu}
          //LogsList
          logs={this.state.totalLogList}
          mapList={this.mapList}
          applyPagination={this.applyPagination}
          // Paginado
          page={this.state.currentPage}
          limit={this.state.limit}
          totalPages={this.state.totalPages}
          onPageChange={this.onPageChange}
          //loading
          isLoading={this.state.isLoading}
        />
      </div>
    )
  }
}
