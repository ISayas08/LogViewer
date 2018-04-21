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

        //Other providers
        this._date = new Date_provider();

        //Observables
        const currentDate = this._date.getFormattedDate();

        this.searchParams$ = new BehaviorSubject({
            startDate: currentDate,
            endDate: currentDate,
            state: 'FL',
            sortBy: 'dt_Start_Log'
        });

        //Valid vormat: dd/mm/yyyy, dd-mm-yyyy, dd.mm.yyyy  
        this.dateFormatPattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

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

    //=================================================================
    //  Emmiters.
    //=================================================================

    emitNewStartLogdate(date) {
        if (date !== '' && this.dateFormatPattern.test(date)) {
            let normalizedDate = date.replace('/-|./', '/');

            const currentParamsValues = this.searchParams$.value;
            this.searchParams$.next({
                startDate: normalizedDate,
                endDate: currentParamsValues.endDate,
                state: currentParamsValues.state,
                sortBy: currentParamsValues.sortBy
            });
        }
    }

    emitNewEndLogdate(date) {
        if (date !== '' && this.dateFormatPattern.test(date)) {
            let normalizedDate = date.replace('/-|./', '/');

            const currentParamsValues = this.searchParams$.value;
            this.searchParams$.next({
                startDate: currentParamsValues.startDate,
                endDate: normalizedDate,
                state: currentParamsValues.state,
                sortBy: currentParamsValues.sortBy
            });
        }
    }

    emitNewCurrentState(state) {
        if (state !== '' && this.stateFormatPattern.test(state)) {

            const currentParamsValues = this.searchParams$.value;
            this.searchParams$.next({
                startDate: currentParamsValues.startDate,
                endDate: currentParamsValues.endDate,
                state: state,
                sortBy: currentParamsValues.sortBy
            });
        }
    }

    emitNewSortParam(sortPram) {
        const currentParamsValues = this.searchParams$.value;
        this.searchParams$.next({
            startDate: currentParamsValues.startDate,
            endDate: currentParamsValues.endDate,
            state: currentParamsValues.state,
            sortBy: sortPram === '' ? 'dt_Start_Log' : sortPram
        });
    }
}