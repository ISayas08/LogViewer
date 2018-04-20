import superagent from 'superagent';

let instance = null;
export class Http_provider {

    constructor() {
        //Make this clases a singleton.
        if (!instance) {
            instance = this;
        }

        //variables
        this.url = '104.254.246.27:3000'; 

        this.fullURL = `http://${this.url}`;

        //Return always the same instance.
        return instance
    }

    makeGetPetition(endpoint, withCredentials = true) {
        return withCredentials ?
            superagent.get(`${this.fullURL}/${endpoint}`).withCredentials() :
            superagent.get(`${this.fullURL}/${endpoint}`);
    }

    makePostPetition(endpoint, body, withCredentials = true) {
        return withCredentials ?
            superagent.post(`${this.fullURL}/${endpoint}`)
                .set('Content-Type', 'application/json')
                .send(body)
                .withCredentials() :
            superagent.post(`${this.fullURL}/${endpoint}`)
                .set('Content-Type', 'application/json')
                .send(body);
    }

    makePutPetition(endpoint, body, withCredentials = true) {
        return withCredentials ?
            superagent.put(`${this.fullURL}/${endpoint}`)
                .set('Content-Type', 'application/json')
                .send(body)
                .withCredentials() :
            superagent.put(`${this.fullURL}/${endpoint}`)
                .set('Content-Type', 'application/json')
                .send(body);
    }

    makeDeletePetition(endpoint, withCredentials = true) {
        return withCredentials ?
            superagent.del(`${this.fullURL}/${endpoint}`).withCredentials() :
            superagent.del(`${this.fullURL}/${endpoint}`);
    }

    getBasicAtachPetition(endpoint, withCredentials = true) {
        return withCredentials ?
            superagent.post(`${this.fullURL}/${endpoint}`).withCredentials() :
            superagent.post(`${this.fullURL}/${endpoint}`).withCredentials();
    }

    //====================================================================
    //  Getters
    //====================================================================

    getUrl() {
        return this.url;
    }

    getFullURL() {
        return this.fullURL;
    }

}