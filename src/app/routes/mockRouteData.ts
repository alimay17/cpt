import { Route } from "./route.model";

export const mockRoutes: Route[] = [
  {
    id: 'g1idfda934',
    name: 'G7-1',
    quadrant: 'G7',
    status: 'On Time',
    stops: [
      {
        stopId: 29926,
        stopTime: '12 min past the hour',
        averageRiders: 200,
        location: 'Melanst Shop'
      },
      {
        stopId: 78354,
        stopTime: '40 min past the hour',
        averageRiders: 57,
        location: 'Burif Cis & Losten'
        
      }
    ]
  },
  {
    id: 'g1idf4j4h4',
    name: 'H9-4',
    quadrant: 'GH',
    status: 'Late',
    stops: [
      {
        stopId: 45648,
        stopTime: '9 min past the hour',
        averageRiders: 12,
        location: 'Ruterlake'
      }
    ]
  }
]