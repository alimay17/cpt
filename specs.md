# CPT Design Documentation

## Database
- Ship
  - ID
  - Capacity
  - Status

- Pilot
  - ID
  - Droid or Living
  - Name
  - Status

- Routes
  - ID
  - quadrant
  - Status
  - Stops [
    - stopId
    - averageRiders
    - location
  ]

  ## App Structure
- Main Page
  - Overview of route & ship status
  - update ship and route status
  - links to all other pages

- Routes
  - Add, update, delete routes
  - add & remove stops from routes
  - Check & update status
  - assign Ships

- Ships
  - check & update status
  - add, update & delete ships
  - assign pilot

- Pilots
  - Add, Update & delete pilots
  - view & update status

### Components
- header
- home
- routes
  - route-edit
  - route-detail
  - route-list
  - routes.service
  - route.model

- ships
  - ship-edit
  - ship-detail
  - ship-list
  - ships.service
  - ship.model

- pilots
  - pilot-edit
  - pilot-detail
  - pilot-list
  - pilots.service
  - pilot.model


## Timeline
- build basic components
- creating links and routing
- finalize design
- build node server
- implement mongodb
- build mongo to angular routing
- finalize connections
- bug fix
- submit

