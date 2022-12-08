import Item from "./item";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Map from "./map";
import Detail from "./detail";
import React, { useContext } from "react";
import { Store } from "../App";

function Content() {
    const nav = useNavigate()
    const params = useParams();
    console.log(params)
    const datas = useContext(Store)
    const navHome = () => {
        nav('/');
    }
    const navBack = () => {
        nav('/');
    }
    return (
        <>
            <div style={{ display: "flex", marginLeft: "10px", marginBottom: "10px" }}>
                <div style={{ width: "65%", height: "40px" }}>
                </div>
                {params.id ?
                    <div style={{ display: "flex" }}>

                        <button style={{ height: "40px" }} onClick={navHome} type="button" className="btn btn-primary float-right">Home</button>
                        <button style={{ height: "40px", }} onClick={navBack} type="button" className="btn btn-secondary float-right">Back</button>
                    </div>

                    :
                    <div style={{ height: "40px" }}> <small>검색결과 : {datas.length}개</small></div>
                }

            </div>
            <div style={{ display: "flex", marginLeft: "10px" }}>

                <div style={{ width: "65%" }}>
                    <Map />
                </div>
                {params.id ?
                    <div style={{ maxHeight: "70vh" }}>
                        <Detail />
                    </div>
                    :
                    <div style={{
                        maxHeight: "70vh", overflowY: "scroll", overflowX: "hidden"
                    }}>
                        {datas.map(data => {
                            return <Item className="mb-3" data={data} key={data.id} />
                        })}
                    </div>
                }
            </div>
        </>
    );
}

export default Content;