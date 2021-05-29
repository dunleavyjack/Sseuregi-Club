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
            center: new kakao.maps.LatLng(37.514843, 127.020449),
            level: 5,
        };

        const map = new kakao.maps.Map(container, options);
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
