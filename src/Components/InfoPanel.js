import React from 'react';

const InfoPanel = ({ nearby, closest = 0 }) => {
    return (
        <>
            <div className="infoPanel">
                <div className="infoCircleContainer">
                    <div className="infoCircle"></div>
                    <div className="infoBar">
                        <p className="infoText">NEAREST</p>
                        <p className="infoDistance">{closest}m</p>
                    </div>
                    <p className="info">
                        <span className="number">{nearby}</span> NEARBY BINS
                    </p>
                </div>
            </div>
        </>
    );
};

export default InfoPanel;
