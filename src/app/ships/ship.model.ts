import { Route } from "../routes/route.model";

export class Ship {
  constructor(
    public shipId: string,
    public assignedRoute: Route | null,
    public capacity: number,
    public status: string
  ){}
}