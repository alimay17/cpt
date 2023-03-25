export class Route {
  constructor(
    public id: string,
    public name: string,
    public quadrant: string,
    public status: string,
    public stops: Array<{
      stopId: number,
      stopTime: string,
      averageRiders: number,
      location: string
    }>
  ) {}
}