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

// post routes
router.post('/', (req, res, next) => {
  const route = new Route({
    id: req.body.id,
    name: req.body.name,
    quadrant: req.body.quadrant,
    pilot: req.body.pilot,
    ship: req.body.ship,
    status: req.body.status,
    stops: req.body.stops
  });

  route.save()
    .then(newRoute => {
      res.status(201).json({
        message: 'New Route Created',
        content: newRoute
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'An error occurred',
        error: error
      });
    });
});

// update route
router.put('/:id', (req, res, next) => {
  Route.findOne({ id: req.params.id })
    .then(route => {
        route.name = req.body.name;
        route.quadrant = req.body.quadrant;
        route.pilot = req.body.pilot;
        route.ship = req.body.ship;
        route.status = req.body.status;
        route.stops = req.body.stops;

      Route.updateOne({ id: req.params.id }, route)
        .then(() => {
          res.status(204).json({
            message: 'route updated successfully'
          })
        })
        .catch(error => {
          res.status(500).json({
            message: 'An error occurred',
            error: error
          });
        });
    })
    .catch(error => {
      res.status(500).json({
        message: 'route not found.',
        error: { route: 'route not found' }
      });
    });
});

router.delete("/:id", (req, res, next) => {
  Route.findOne({ id: req.params.id })
    .then(() => {
      Route.deleteOne({ id: req.params.id })
        .then(() => {
          res.status(204).json({
            message: "Route deleted successfully"
          });
        })
        .catch(error => {
          res.status(500).json({
            message: 'An error occurred',
            error: error
          });
        })
    })
    .catch(() => {
      res.status(500).json({
        message: 'Route not found.',
        error: { document: 'Route not found' }
      });
    });
});

module.exports = router;