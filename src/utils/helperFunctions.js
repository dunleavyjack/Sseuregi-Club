export const getGridPosition = (address) => {
    // for href url kakao api takes
    const addressStr = address.toCoords().toString();
    const xCoor = addressStr.split(',')[0].substring(1);
    const yCoor = addressStr.split(',')[1].slice(0, -1);
    return {
        x: xCoor,
        y: yCoor,
    };
};
