import React from 'react';

const InfoPanel = ({ nearby }) => {
    return (
        <>
            <div className="infoCircleContainer">
                <div className="infoCircle"></div>
                <div className="infoBar"></div>
                <h1 className="infoNumber">{nearby}</h1>
                <p className="infoTextTop">NEARBY</p>
                <p className="infoTextBottom">BINS</p>
            </div>
            <div className="infoPanel"></div>
        </>
    );
};

export default InfoPanel;
