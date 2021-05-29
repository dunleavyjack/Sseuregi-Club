/*global kakao */
import { useEffect } from 'react';
import { markerdata } from '../data/markerData';
import mapPin from '../assets/images/mapPin.png';

const useMap = () => {
    useEffect(() => {
        mapscript();
    }, []);

    const mapscript = () => {
        let container = document.getElementById('map');
        let options = {
            center: new kakao.maps.LatLng(37.51355, 127.033647),
            level: 5,
        };

        const map = new kakao.maps.Map(container, options);

        const displayMarker = (locPosition, message) => {
            var marker = new kakao.maps.Marker({
                map: map,
                position: locPosition,
            });

            map.setCenter(locPosition);
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude, // 위도
                    lon = position.coords.longitude; // 경도

                var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
                displayMarker(locPosition);
            });
        } else {
            var locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
            displayMarker(locPosition);
        }

        const imageSrc = mapPin,
            imageSize = new kakao.maps.Size(50, 75);

        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        markerdata.forEach((el) => {
            new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(el.lat, el.lng),
                title: el.title,
                image: markerImage,
            });
        });
    };
};

export default useMap;
