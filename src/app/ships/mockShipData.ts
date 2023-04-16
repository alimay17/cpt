import { mockRoutes } from "../routes/mockRouteData";
import { Route } from "../routes/route.model";
import { Ship } from "./ship.model";

export const mockShips: Ship[] = [
  {
    shipId: 'fhi9fnas',
    name: 'Wrecker',
    assignedRoute: mockRoutes[0],
    capacity: 27,
    status: 'Active'
  },
  {
    shipId: 'dfe0isid',
    name: 'Tech',
    assignedRoute: mockRoutes[1],
    capacity: 89,
    status: 'Inactive'
  }
]