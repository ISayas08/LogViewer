
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
    getFormattedDate(date = new Date()) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        return month + '/' + day + '/' + year;
    }
}