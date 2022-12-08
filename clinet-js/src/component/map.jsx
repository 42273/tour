import { useContext } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Store } from "../app";
import {useNavigate} from 'react-router-dom';


const { kakao } = window




function Map() {
    const value = useContext(Store);
    const nav = useNavigate();
    const divRef = useRef();

    // console.log(kakao)
    useEffect(() => {
        console.log("mapRender")
        const center = new kakao.maps.LatLng(35.16009, 126.8516327193082)
        const options = {
            center: center,
            level: 6,

        }
        const map = new kakao.maps.Map(divRef.current, options);
        const clusterer = new kakao.maps.MarkerClusterer({
            map: map,
            averageCenter: true,
            minLevel: 6
        });

        // const bounds = map.getBounds();
        //if (지도에서 찾기 true) 면 

        const markers = value.map(e => {
            // let rst = bounds.contain(new kakao.maps.LatLng(e.lat,e.lng));
            // console.log(rst);
            const position = new kakao.maps.LatLng(e.lat, e.lng)
            const marker = new kakao.maps.Marker({
                position: position
            });
            marker.setMap(map)
            const iwContent = `<span style="width : 20vh; padding:5px; display: inline-block; text-overflow: ellipsis" >${e.id}. ${e.tourDestNm}</span>`
            const infowindow = new kakao.maps.InfoWindow({
                //     position : position, 
                content: iwContent
            });
            kakao.maps.event.addListener(marker, 'mouseover', function () {
                infowindow.open(map, marker);
            });
            kakao.maps.event.addListener(marker, 'mouseout', function () {
                infowindow.close();
            });

            kakao.maps.event.addListener(marker, 'click', function () {
                nav(`/detail/${e.id}`);
                divRef.current.focus()
            });
            return marker
        })
        clusterer.addMarkers(markers)
    }, [value])

    return (
        <div ref={divRef} style={{ height: "70vh", marginRight: "10px", borderRadius: "4%" }}>MAP</div>
    );
}

export default Map;