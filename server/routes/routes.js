var express = require('express');
var router = express.Router();

const Route = require('../models/routes');

// get routes
router.get('/', (req, res, next) => {
  Route.find().then(routes => {
    res.status(200).json({
      message: 'Routes fetched successfully',
      content: routes
    });
  }).catch(error => {
    res.status(500).json({
      message: 'Unable to fetch routes',
      content: error
    });
  });
});

module.exports = router;