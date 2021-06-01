import React from 'react';

const InfoPanel = ({ nearby }) => {
    return (
        <>
            <div className="infoPanel">
                <div className="infoCircleContainer">
                    <div className="infoCircle"></div>
                    <div className="infoBar"></div>
                    <p className="info">
                        <span className="number">{nearby}</span> NEARBY BINS
                    </p>
                </div>
            </div>
        </>
    );
};

export default InfoPanel;
