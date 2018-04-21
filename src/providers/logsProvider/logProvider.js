import { BehaviorSubject } from 'rxjs';

import { Http_provider } from "./../http-provider";
import { Search_Provider } from "../searchFilterConfigProvider/searchFilterConfigProvider";

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
        this._searchConfig = new Search_Provider();

        //variables
        this.endpoint = 'GetLogsRecordData';
        this.logs$ = new BehaviorSubject([]);

        //Return always the same instance.
        return instance;
    }

    //=================================================================
    //  Main methods.
    //=================================================================

    loadLogs() {
        //Get search params.
        this._searchConfig.getParams().subscribe(data => {
            this._http.makeGetPetition(
                `${this.endpoint}?startdate=${data.startDate}&enddate=${data.endDate}&state=${data.state}`,
                false
            ).end((err, res) => {
                if (!err) {
                    //Emit a new value for log's array.
                    this.logs$.next(res.body);
                } else {
                    console.log('Error: ' + err);
                }
            });
        });
    }

    //=================================================================
    //  Getters.
    //=================================================================

    getLogsListObservable() {
        return this.logs$;
    }
}