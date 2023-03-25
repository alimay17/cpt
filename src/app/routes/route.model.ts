export class Route {
  constructor(
    public id: string,
    public quadrant: string,
    public status: string,
    public stops: Array<{
      stopId: number,
      averageRiders: number,
      location: string
    }>
  ) {}
}