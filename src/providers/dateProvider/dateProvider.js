import * as moment from 'moment';

let instance = null;
export class Date_provider {

    constructor() {
        //Make this clases a singleton.
        if (!instance) {
            instance = this;
        }

        //Variables

        //Return always the same instance.
        return instance
    }

    //====================================================================
    //  Getters
    //====================================================================

    /**
     * This method receives a date and returns it with the format [MM/DD/YYYY].
     * 
     * @param {Object} date This parameter is the date will be formatted,
     * if it is not available, the current date will be assumed.
     */
    getFormattedDate(date = moment()) {
        let day = date.date();
        let month = date.month() + 1;
        let year = date.year();

        return month + '/' + day + '/' + year;
    }

    getDateAsHTMLFormat(date = moment()) {
        let day = date.date();
        let month = date.month() + 1;
        let year = date.year();

        return year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
    }
}