// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const headq = 42;
    if (someValue > 42) {
        return someValue - 42
    } else {
        return 42 - someValue
    }
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264
}

function distanceFromHqInFeet(start, destination) {
    return (Math.abs (destination - start) * 264)
}
function calculatesFarePrice(start, destination) {

}