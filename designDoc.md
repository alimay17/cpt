# Coruscant Public Transportation Design Documentation
## Purpose
Manage ships and crews in Coruscant Public Transportation

## Database
- vehicle
  - id 
  - capacity
  - status
- crew
  - id
  - name
  - status
- Routes
  - routeId
  - quadrant
  - status 
  - stops[
    - stopId
    - averageRiderNum
    - location
    ] 

# App Stucture
- Main - overview
- Routes
- vehicles
- routes
- stats

# Functionality
- CRUD on vehicles
- CRUD on crew
- CRUD on Routes
- assign crew to vehicle
- assign vehicle to routes
- stats view
- overview

## Angular Packages
- Medium
- 

## Node Packages
- express body-parser cookie-parser morgan
- Mongoose
