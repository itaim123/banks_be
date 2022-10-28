const haversine = require('haversine-distance');

const getDistance = (currentLocation, targetLocation) => {
  return haversine(currentLocation, targetLocation) / 1000;
};

function getDistanceFromLatLonInKm(currentLocation, targetLocation) {
  const { xCur: currentX, yCur: currentY } = currentLocation;
  const { X_Coordinate: targetX, Y_Coordinate: targetY } = targetLocation;
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(targetX - currentX); // deg2rad below
  var dLon = deg2rad(targetY - currentY);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(currentX)) *
      Math.cos(deg2rad(targetX)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

module.exports = { getDistance, getDistanceFromLatLonInKm };
