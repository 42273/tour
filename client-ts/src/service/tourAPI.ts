
export class TourAPI {
    baseURL:string;
    constructor(baseUrl:string) {
        this.baseURL = baseUrl;
    }

    async getInfos() {

        const serviceKey =  process.env.REACT_APP_SERVICE_KEY;
        const type = "json";
        const resp = await fetch(this.baseURL + "?serviceKey=" + serviceKey+"&type="+type);
        return await resp.json();
    }
}

