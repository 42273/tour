import { useContext, useState } from "react";
import React, { useEffect } from "react";
import { Api } from "../App";
import { useParams } from 'react-router-dom';

type commentType = {
    writer: string, score: string, comments: string
}
function CommentList() {
    const target = useParams();
    const ReviewAPI = useContext(Api)
    const [comments, setComments] = useState<commentType[]>([])
    useEffect(() => {
        ReviewAPI.read(target.id!)
            .then((rst: { result: boolean, datas: commentType[] }) => {
                if (rst.result) {
                    setComments(rst.datas)
                }
            });
    }, [])

    return (
        <>
            {comments.map((i, index) => <p key={index}>{i.writer} ({i.score}) : {i.comments}</p>)}
        </>
    );
}

export default CommentList;