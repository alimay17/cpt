import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route } from './route.model';


import { mockRoutes } from './mockRouteData';


@Injectable({
  providedIn: 'root'
})
export class RouteService {

  //properties
  routes: Route[] = [];
  private url = 'http://localhost:3000/api/routes';

  //events
  routesChangedEvent = new Subject < Route[] > ();

  // constructor
  constructor(
    // private httpClient: HttpClient
  ) {}

  /*============ Server Connection Methods =============*/

  getRoutes() {
    console.log('get routes');
    // this.httpClient.get<{message:string, content:Route[]}>(this.url)
    // .subscribe({
    //   next: (response) => {
    //     this.routes = response.content;
    //     this.routesChangedEvent.next(this.routes.slice());

    //   },
    //   // handle errors
    //   error: (error:any) => {
    //     console.log(error.message);
    //   }
    // });
    this.routes = mockRoutes;
    this.routesChangedEvent.next(this.routes.slice());
  }

  // delete one route
  deleteRoute(route: Route) {
    const pos = this.routes.findIndex(r => r.id === route.id);
    if (pos < 0) {
      return;
    }
    this.routes.splice(pos, 1);
    this.routesChangedEvent.next(this.routes.slice());
  }

  // get route by id
  getRoute(id: string): Route | null {
    for (const route of this.routes) {
      if (route.id == id) {
        return route;
      }
    };
    return null;
  }

  // Add
  addRoute(newRoute: Route) {
    newRoute.id = this.generateRouteId();
    this.routes.push(newRoute);
    this.routesChangedEvent.next(this.routes.slice());
  }

  updateRoute(oldRoute: Route, newRoute: Route) {
    const pos = this.routes.findIndex(r => r.id === oldRoute.id);

    newRoute.id = oldRoute.id;
    this.routes[pos] = newRoute;
    this.routesChangedEvent.next(this.routes.slice());
  }

  // save individual route
  saveStops(route: Route) {
    const pos = this.routes.findIndex(r => r.id === route.id);
    if (pos < 0) {
      return;
    }
    this.routes[pos] = route;
    this.routesChangedEvent.next(this.routes.slice());
  }

  private generateRouteId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
}