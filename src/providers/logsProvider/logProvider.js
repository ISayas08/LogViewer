import { BehaviorSubject } from 'rxjs';

import { Http_provider } from "./../http-provider";

let instance = null;
export class Log_Provider {

    //=================================================================
    //  Constructor.
    //=================================================================

    constructor() {
        //Make this clases a singleton.
        if (!instance) {
            instance = this;
        }
        //Ather providers
        this._http = new Http_provider();

        //variables
        this.endpoint = 'GetLogsRecordData';
        this.logs$ = new BehaviorSubject([]);
        this.isLoading$ = new BehaviorSubject(true);

        //Return always the same instance.
        return instance;
    }

    //=================================================================
    //  Main methods.
    //=================================================================

    loadLogs(data) {
        this._http.makeGetPetition(
            `${this.endpoint}?startdate=${data.startDate}&enddate=${data.endDate}&state=${data.state}`,
            false
        ).end((err, res) => {
            if (!err) {
                //Emit a new value for log's array.
                this.logs$.next(res.body);
                this.emitNewIsLoad(false);
            } else {
                console.log('Error: ' + err);
            }
        });
    }

    //=================================================================
    //  Getters.
    //=================================================================

    getLogsListObservable() {
        return this.logs$;
    }

    getIsLoad() {
        return this.isLoading$;
    }

    //=================================================================
    //  Emiters.
    //=================================================================

    emitNewIsLoad(value) {
        this.isLoading$.next(value);
    }
}