var express = require('express');
var router = express.Router();

const Ship = require('../models/ships');

// get ships
router.get('/', (req, res, next) => {
  Ship.find().then(ships => {
    res.status(200).json({
      message: 'Ships Fetched Successfully',
      content: ships
    });
  }).catch(error => {
    res.status(500).json({
      message: 'Unable to fetch ships',
      content: error
    });
  });
});