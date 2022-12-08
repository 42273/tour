import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom';


function Item({ data }) {



    const navigate = useNavigate();

    const clickHandle = ()=>{
        navigate("/detail/"+data.id)
    }
    return (
        <>

        
        <div style={{cursor:"pointer"}}  onClick={clickHandle} >

            <Card style={{ width: '23rem', marginBottom:"7px",marginRight:"5px" }} >
                <Card.Body>
                    <Card.Title>{data.id}. {data.tourDestNm ?? ""}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted "><small>{data.addrRoad ?? ""}</small></Card.Subtitle>
                    <Card.Text>
                        <small><i>{data.tourDestIntro ?? ""}</i><br />
                        전화번호 : {data.mngAgcTel ?? ""} <br />
                        주차가능 : {data.availParkingCnt ?? ""} <br />
                        </small>

                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
        </>

    );
}

export default Item;