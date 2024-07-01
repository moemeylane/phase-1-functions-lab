

function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; 
    return Math.abs(pickupLocation - hqLocation);
}
function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264; 
    const blocksAway = distanceFromHqInBlocks(pickupLocation);
    return blocksAway * feetPerBlock;
}
function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264;
    const blocksTravelled = Math.abs(endBlock - startBlock);
    return blocksTravelled * feetPerBlock;
}
function calculatesFarePrice(startBlock, endBlock) {
    const feetPerBlock = 264; 
    const distance = distanceTravelledInFeet(startBlock, endBlock);

    
    if (distance <= 400) {
        return 0; 
    } else if (distance > 400 && distance <= 2000) {
        
        const fare = (distance - 400) * 0.02;
        return fare;
    } else if (distance > 2000 && distance < 2500) {
        
        return 25;
    } else {
        
        return 'cannot travel that far';
    }
}


function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264; 
    const blocksTravelled = Math.abs(endBlock - startBlock);
    return blocksTravelled * feetPerBlock;
}


