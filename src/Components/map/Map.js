/* global kakao */
import React, { useState } from 'react';
import useMap from '../../hooks/useMap';
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
            <div style={{ padding: '20px' }}>
                {canDistance.length === 32
                    ? `Nearest Bin ${closest}m away. There are ${nearbyCans} nearby. :)`
                    : 'Finding your location...'}
            </div>
            <div id="map" style={{ width: '100vw', height: '90vh' }}></div>
        </>
    );
};

export default Map;
