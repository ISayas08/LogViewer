import React, { Component } from 'react';
import * as moment from 'moment';
import { ListOptionsPresentational } from './listOptionsPresentational';
import { Search_Provider } from '../../providers/searchFilterConfigProvider/searchFilterConfigProvider';
import { Date_provider } from '../../providers/dateProvider/dateProvider';

export class ListOptionsContainer extends Component {
    //===========================================================
    // Constructor.
    //===========================================================

    constructor(props) {
        super(props);

        this.state = {
            sortParam: '',
            startDate: '',
            endDate: '',
            currentState: '',
            isDisplayed: false,
            _searchOptions: new Search_Provider(),
            _date: new Date_provider()
        }
    }

    //===========================================================
    // LifeCycle.
    //===========================================================
    componentDidMount() {
        this.state._searchOptions.getParams().subscribe(params => {
            this.setState({
                startDate: this.state._date.getDateAsHTMLFormat(moment(params.startDate)),
                endDate: this.state._date.getDateAsHTMLFormat(moment(params.endDate)),
                currentState: params.state,
            });
            this.state._searchOptions.getSortParam().subscribe(sortParam => {
                this.setState({
                    sortParam: sortParam
                })
            })
        })
    }
    //===========================================================
    // Events.
    //===========================================================

    onInputChange = (e) => {
        let id = e.target.id;
        let value = e.target.value;

        this.setState({
            sortParam: id === 'sortSelect' ? value : this.state.sortParam,
            startDate: id === 'startDate' ? value : this.state.startDate,
            endDate: id === 'endtDate' ? value : this.state.endDate,
            currentState: id === 'stateSelect' ? value : this.state.currentState
        }, () => {
            if (id === 'sortSelect') this.state._searchOptions.emitNewSortParam(value)
        })
    }

    onApply = () => {
        this.state._searchOptions.emitAllParams({
            startDate: this.state._date.getFormattedDate(moment(this.state.startDate)),
            endDate: this.state._date.getFormattedDate(moment(this.state.endDate)),
            state: this.state.currentState
        });
        this.toggleOptions()
    }

    toggleOptions = () => {
        this.setState({
            isDisplayed: !this.state.isDisplayed
        })
    }

    //===========================================================
    // Render.
    //===========================================================

    render() {
        return <ListOptionsPresentational
            states={this.state._searchOptions.getStatesCodes()}
            sortParams={this.state._searchOptions.getSortParams()}
            sortParam={this.state.sortParam}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            currentState={this.state.currentState}
            onInputChange={this.onInputChange}
            onApply={this.onApply}
            toggleOptions={this.toggleOptions}
            isDisplayed={this.state.isDisplayed}
        />
    }
}