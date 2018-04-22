import { BehaviorSubject } from 'rxjs';
import { Date_provider } from "../dateProvider/dateProvider";

let instance = null;
export class Search_Provider {

    //=================================================================
    //  Constructor.
    //=================================================================

    constructor() {
        //Make this clases a singleton.
        if (!instance) {
            instance = this;
        }

        //variables
        this.statesCodes = ['OH', 'FL', 'GA', 'LA'];
        this.sortParams = [];

        //Other providers
        this._date = new Date_provider();

        //Observables
        const currentDate = this._date.getFormattedDate();

        this.searchParams$ = new BehaviorSubject({
            startDate: currentDate,
            endDate: currentDate,
            state: 'FL'
        });

        this.sortParam$ = new BehaviorSubject('dt_Start_Log');

        //Valid values: FL, LA, GA, oH
        this.stateFormatPattern = /^FL$|^LA$|^GA$|^OH$/;

        //Return always the same instance.
        return instance;
    }

    //=================================================================
    //  Getters.
    //=================================================================

    getParams() {
        return this.searchParams$;
    }

    getSortParam() {
        return this.sortParam$;
    }

    getStatesCodes() {
        return this.statesCodes;
    }

    getSortParams() {
        return this.sortParams;
    }

    //=================================================================
    //  Emmiters.
    //=================================================================

    emitNewStartLogdate(date) {
        if (date !== '') {
            let normalizedDate = date.replace('/-|./g', '/');

            const currentParamsValues = this.searchParams$.value;
            this.searchParams$.next({
                startDate: normalizedDate,
                endDate: currentParamsValues.endDate,
                state: currentParamsValues.state
            });
        }
    }

    emitNewEndLogdate(date) {
        if (date !== '') {
            let normalizedDate = date.replace('/-|./g', '/');

            const currentParamsValues = this.searchParams$.value;
            this.searchParams$.next({
                startDate: currentParamsValues.startDate,
                endDate: normalizedDate,
                state: currentParamsValues.state
            });
        }
    }

    emitNewCurrentState(state) {
        if (state !== '' && this.stateFormatPattern.test(state)) {

            const currentParamsValues = this.searchParams$.value;
            this.searchParams$.next({
                startDate: currentParamsValues.startDate,
                endDate: currentParamsValues.endDate,
                state: state
            });
        }
    }

    emitAllParams(params) {
        if (
            params
            && this.stateFormatPattern.test(params.state)
        ) {
            this.searchParams$.next({
                startDate: params.startDate,
                endDate: params.endDate,
                state: params.state
            });
        }
    }

    emitNewSortParam(sort) {
        if (sort && sort !== '') {
            this.sortParam$.next(sort);
        }
    }

    setSortParams(sortParams) {
        this.sortParams = sortParams;
    }
}