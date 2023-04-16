export class Route {
  constructor(
    public id: string,
    public name: string,
    public quadrant: string,
    public pilot: string,
    public ship: string,
    public status: boolean,
    public stops: Array<{
      stopId: number,
      stopTime: string,
      averageRiders: number,
      location: string
    }>
  ) {}
}