/* global kakao */
import React, { useState } from 'react';
import useMap from '../../hooks/useMap';
import InfoPanel from '../../Components/InfoPanel';
import Navbar from '../../Components/Navbar';
import { findClosestBin } from '../../utils/helperFunctions';

const Map = () => {
    const [closestBin, setClosestBin] = useState(0);
    const { canDistance, nearbyCans } = useMap();
    let closest = 0;

    if (canDistance.length === 32) {
        closest = findClosestBin(canDistance);
        console.log('closest can below');
        console.log(closest);
        console.log('nearby cans below');
        console.log(nearbyCans);
    }

    return (
        <>
            <Navbar />
            <div
                id="map"
                style={{ width: '100vw', height: '100vh', margin: '0px' }}
            ></div>
            <InfoPanel nearby={nearbyCans} />
        </>
    );
};

export default Map;
