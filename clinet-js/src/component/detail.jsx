import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { Store} from'../app.js'
import { useContext } from 'react';

import Card from 'react-bootstrap/Card';
import ReviewAdd from './reviewAdd.jsx';
import CommentList from './commentList.jsx';

function Detail() {

    const params = useParams();
    const value = useContext(Store)
    const data = value[params.id-1]

    console.log(window.location.pathname)

    useEffect(()=>{

    })
    console.log(data.lat,data.lng)

    console.log(data)
    return ( 

        <>
            <Card style={{ width: '23rem', marginBottom:"7px",marginRight:"5px" }}>
                <Card.Body>
                    <Card.Title>{data.id}. {data.tourDestNm ?? ""}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted "><small>{data.addrRoad ?? ""}</small></Card.Subtitle>
                    <Card.Text>
                        <i>{data.tourDestIntro ?? ""}</i><br />
                        <br />
                        전화번호 : {data.mngAgcTel ?? ""} <br />
                        <br />
                        최대 주차가능 : {data.availParkingCnt ?? ""} <br />
                        최대 수용인원 : {data.capacity} <br />
                        {data.publicConvFcItInfo&&'편의시설' }

                    </Card.Text>

                </Card.Body>
            </Card>

            <ReviewAdd/>
            <CommentList/>
        </>
     );
}

export default Detail;