import React, { Component } from 'react';
import { LogsListPresentational } from './statisticsPresentational';
import { SideMenuContainer } from '../sideMenu/sideMenuContainer';
import { Log_Provider } from '../../providers/logsProvider/logProvider';


export class StatisticsContainer extends Component {

    //========================================================
    // Constructor.
    //========================================================
    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: true,
            isLoading: true,
            pageTitle: 'Statistics',
            _log: new Log_Provider(),
        }
    }

    //========================================================
    // LifeCycle.
    //========================================================
    componentDidMount() {
        this.state._log.getIsLoad().subscribe(loading => {
            this.setState({
                isLoading: loading
            });
        });
    }
    //========================================================
    // Events.
    //========================================================

    toggleSideMenu = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        });
    }

    //========================================================
    // Render.
    //========================================================

    render() {
        return (
            <div>
                <SideMenuContainer
                    isMenuOpen={this.state.isMenuOpen}
                    toggleSideMenu={this.toggleSideMenu}
                />

                <LogsListPresentational
                    pageTitle={this.state.pageTitle}
                    //Menu
                    isMenuOpen={this.state.isMenuOpen}
                    toggleSideMenu={this.toggleSideMenu}
                />
            </div>
        )
    }
}
