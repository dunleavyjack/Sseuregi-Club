/*global kakao */
import { useEffect } from 'react';
import { markerdata } from '../data/markerData';
import trashPinImage from '../assets/images/trashPin.png';
import recyclingPinImage from '../assets/images/recyclingPin.png';
import locationPinImage from '../assets/images/locationPin.png';
import { getGridPosition } from '../utils/helperFunctions';

const useMap = () => {
    useEffect(() => {
        mapscript();
    }, []);

    const mapscript = () => {
        let container = document.getElementById('map');
        let options = {
            center: new kakao.maps.LatLng(37.505809, 127.037707),
            level: 7,
        };

        const trashPinSrc = trashPinImage,
            trashPinSize = new kakao.maps.Size(50, 75);

        const recyclePinSrc = recyclingPinImage,
            recyclePinSize = new kakao.maps.Size(50, 75);

        const locationPinSrc = locationPinImage,
            locationPinSize = new kakao.maps.Size(25, 37);

        const trashPin = new kakao.maps.MarkerImage(trashPinSrc, trashPinSize);

        const locationPin = new kakao.maps.MarkerImage(
            locationPinSrc,
            locationPinSize
        );
        const recyclePin = new kakao.maps.MarkerImage(
            recyclePinSrc,
            recyclePinSize
        );

        const map = new kakao.maps.Map(container, options);

        const displayMarker = (locPosition) => {
            new kakao.maps.Marker({
                map: map,
                position: locPosition,
                // image: locationPin,
            });

            map.setCenter(locPosition);
            map.setLevel(5, {
                animate: {
                    duration: 500,
                },
            });
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

        markerdata.forEach((trashCan) => {
            let trashPosition = new kakao.maps.LatLng(
                trashCan.lat,
                trashCan.lng
            );
            let trashGridPosition = getGridPosition(trashPosition);

            let marker = new kakao.maps.Marker({
                map: map,
                position: trashPosition,
                title: trashCan.title,
                image: trashCan.recycling ? recyclePin : trashPin,
            });
            let infowindow = new kakao.maps.InfoWindow({
                position: trashPosition,
                content: `<div><a href="https://map.kakao.com/?urlX=${trashGridPosition.x}&urlY=${trashGridPosition.y}&name=Public+Trash+Can%21">Directions</a></div>`,
            });
            // infowindow.open(map, marker);
            kakao.maps.event.addListener(marker, 'click', function () {
                // 마커 위에 인포윈도우를 표시합니다
                infowindow.open(map, marker);
            });
            kakao.maps.event.addListener(map, 'click', function () {
                // 마커 위에 인포윈도우를 표시합니다
                infowindow.close();
            });
        });
    };
};

export default useMap;

// https://map.kakao.com/?urlX=400206.0&urlY=-11702.0&name=Hello+World%21

//https://map.kakao.com/?map_type=TYPE_MAP&target=car&rt=%2C%2C400206%2C-11702&rt1=&rt2=Hello+World%21&rtIds=%2C&rtTypes=%2C
