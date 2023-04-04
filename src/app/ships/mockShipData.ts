import { mockRoutes } from "../routes/mockRouteData";
import { Route } from "../routes/route.model";
import { Ship } from "./ship.model";

export const mockShips: Ship[] = [
  {
    shipId: 'fhi9fnas',
    assignedRoute: mockRoutes[0],
    capacity: 27,
    status: 'Active'
  },
  {
    shipId: 'dfe0isid',
    assignedRoute: mockRoutes[1],
    capacity: 89,
    status: 'Inactive'
  }
]