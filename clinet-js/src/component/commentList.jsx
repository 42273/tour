import { useContext } from "react";
import { useEffect } from "react";
import { Api } from "../app";
import {useParams} from 'react-router-dom';

function CommentList() {
    const target = useParams();
    const ReviewAPI = useContext(Api)

    
    useEffect(async ()=>{
        const list = await ReviewAPI.read(target.id);
        console.log(list)
    },[])



    return ( 
        <>
        <h1>test</h1>
        </>
     );
}

export default CommentList;