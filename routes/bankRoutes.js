const express = require('express');
const router = express.Router();
const db = require('../db.json');
const { getDistance } = require('../utils');

router.post('/getBanks', (req, res) => {
  const { latitude, longitude } = req.query;

  const currentLocation = { latitude, longitude };

  const slicedDB = db.slice(0, 1500);
  const sortedByDistance = slicedDB
    .map((bank) => ({
      ...bank,
      distance: getDistance(currentLocation, {
        longitude: bank.X_Coordinate,
        latitude: bank.Y_Coordinate,
      }),
    }))
    .filter(a=>a.distance <= 150)
    .sort((a, b) => a.distance - b.distance)
  return res.status(200).json(sortedByDistance);
});

module.exports = router;
