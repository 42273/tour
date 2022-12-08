import { useState } from "react";
import { useRef } from "react";
import { useContext } from 'react';
import {  Api } from "../app";
import { useParams } from 'react-router-dom';



function ReviewAdd() {
    const reviewAPI = useContext(Api);
    console.log(useParams().id - 1)
    const [star, setStar] = useState(5)


    const nameRef = useRef(null);
    const commentRef = useRef(null);
    
    const target = useParams().id
    const addReviewHandle = async evt => {
        evt.preventDefault()

        const writer = nameRef.current.value
        const comments = commentRef.current.value
        const score = star
        const resp = await reviewAPI.create(target, writer, comments, score)
        console.log(resp+"resp")
    }



    const rating = "☆".repeat(star)
    return (

        <div style={{ width: '23rem', marginBottom: "7px", marginRight: "5px" }}>

            <form onSubmit={addReviewHandle}>

                <div className="form-row" >
                    <div className=' d-flex  align-items-center'>

                        <div className="col-6">
                            <input type="text" className="form-control" placeholder="이름" ref={nameRef} />
                        </div>

                        <div className="col-3 row-8 ml-5">
                            <input type="range" className="form-range" min="1" max="5" id="customRange2" onChange={e => setStar(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="customRange2" className="form-label ml-3 " >{rating}</label>
                        </div>
                    </div>
                    <div className=' d-flex'>
                        <div className="col-10 d-flex align-items-start">
                            <input type="text" className="form-control" placeholder="댓글" ref={commentRef} />
                        </div>
                        <button type="submit" className=" d-flex justify-content-end btn btn-secondary">확인</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ReviewAdd;