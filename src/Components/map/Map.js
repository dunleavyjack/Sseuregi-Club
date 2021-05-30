import React, { useState } from 'react';
import useMap from '../../hooks/useMap';
import { findClosestBin } from '../../utils/helperFunctions';

const Map = () => {
    const [closestBin, setClosestBin] = useState(0);
    const { canDistance } = useMap();

    if (canDistance.length === 32) {
        const closestBin = findClosestBin(canDistance);
        console.log(closestBin);
    }
    return <div id="map" style={{ width: '100vw', height: '100vh' }}></div>;
};

export default Map;
