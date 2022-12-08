export class ReviewAPI{
    constructor(){
        this.baseURL = "http://127.0.0.1:8070/api/tour";
        this.postOption = {
            method : "post",
            headers:{
                "content-type":"application/json"
                // "content-type":"multipart/fomr-data"
            }
        }
        this.getOption = {
            method :"get"
        }
    }
    async read(target){
        const response =await fetch(this.baseURL+"/get?target="+target, this.getOption)
        return await response.json();
    }
    async create (target, writer, comments, score, files){

        // const body = new FormData();
        // body.append("target",target) ---
        // body.append("photos", files);
        // body:body;
        const response = await fetch(this.baseURL+'/post',{
            ...this.postOption,
            body:JSON.stringify({
                target:target,
                writer:writer,
                comments:comments,
                score:score
            })
        })
        return await response.json();
    }

}