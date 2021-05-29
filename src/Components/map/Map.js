import React from 'react';
import useMap from '../../hooks/useMap';

const Map = () => {
    useMap();

    return <div id="map" style={{ width: '100vw', height: '100vh' }}></div>;
};

export default Map;
