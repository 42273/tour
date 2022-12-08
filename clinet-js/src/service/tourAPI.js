
export class TourAPI {
    constructor() {
        this.baseURL = "http://apis.data.go.kr/6290000/tourdestbaseinfo/gettourdestbaseinfo"
    }

    async getInfos(tourDestNm) {

        const serviceKey =  process.env.REACT_APP_SERVICE_KEY
        const type = "json"

        if (tourDestNm) {
            // params.append("tourDestNm", tourDestNm);
        }
        const resp = await fetch(this.baseURL + "?serviceKey=" + serviceKey+"&type="+type);
        return await resp.json();
    }
}

