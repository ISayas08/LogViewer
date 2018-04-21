import logo from './../../assets/logo.png';

let instance = null;
export class Resource_provider {

    constructor() {
        //Make this clases a singleton.
        if (!instance) {
            instance = this;
        }

        //Variables
        this.LOGO = logo;

        //Return always the same instance.
        return instance
    }

    //====================================================================
    //  Getters
    //====================================================================

    getLogoUrl() {
        return this.LOGO;
    }
}