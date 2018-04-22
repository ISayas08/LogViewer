import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LogItemPresentational } from './logItemPresentational';

export  class LogItemContainer extends Component {

    //============================================================
    //  Props.
    //============================================================
    static propTypes = {
        stateCode: PropTypes.string,
        proCode: PropTypes.number,
        profession: PropTypes.string,
        licenseId: PropTypes.string,
        cicleEndDate: PropTypes.string,
        status: PropTypes.string,
        clientId: PropTypes.string,
        startLogDate: PropTypes.string,
        endLogDate: PropTypes.string,
        enviroment: PropTypes.string,
        machine: PropTypes.string,
        index: PropTypes.number
    }

    //============================================================
    //  Constructor.
    //============================================================

    constructor(props) {
        super(props);

        this.state = {
            isDisplayed: false
        }
    }

    //============================================================
    //  Events.
    //============================================================

    toggleItem = () => {
        this.setState({
            isDisplayed: !this.state.isDisplayed
        })
    }

    //============================================================
    //  Render.
    //============================================================

    render() {
        return <LogItemPresentational {...this.props}
            isDisplayed={this.state.isDisplayed}
            toggleItem={this.toggleItem}
        />
    }
}
