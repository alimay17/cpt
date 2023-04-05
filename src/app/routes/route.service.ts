import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Route } from './route.model';


@Injectable({
  providedIn: 'root'
})
export class RouteService {

  //properties
  routes: Route[] = [];
  private url = 'http://localhost:3000/api/routes';

  //events
  routesChangedEvent = new Subject <Route[]> ();

  // constructor
  constructor(
    private httpClient: HttpClient
  ) {}

  /*============ Server Connection Methods =============*/

  // get all routes
  getRoutes() {
    this.httpClient.get <{ message: string, content: Route[] }> (this.url)
      .subscribe({
        next: (response) => {
          this.routes = response.content;
          this.routesChangedEvent.next(this.routes.slice());

        },
        error: (error: any) => {
          console.log(error.message);
        }
      });
  }

  // Add one route
  addRoute(newRoute: Route) {
    if (!newRoute) {
      return;
    }
    newRoute.id = this.generateRouteId();

    // add to database
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.httpClient.post <{ message: string, content: Route }> (
        this.url,
        newRoute, { headers: headers })
      .subscribe(
        (response) => {
          this.routes.push(response.content);
          this.routesChangedEvent.next(this.routes.slice());
        }
      );
  }

  // update one route
  updateRoute(oldRoute: Route, newRoute: Route) {
    if (!oldRoute || !newRoute) {
      return;
    }

    const pos = this.routes.findIndex(r => r.id === oldRoute.id);
    if (pos < 0) {
      return;
    }
    newRoute.id = oldRoute.id;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.httpClient.put(this.url + '/' + oldRoute.id,
        newRoute, { headers: headers })
      .subscribe(() => {
          this.routes[pos] = newRoute;
          this.routesChangedEvent.next(this.routes.slice());
        }
      );
  }



  // delete one route
  deleteRoute(route: Route) {
    if (!route) {
      return;
    }

    const pos = this.routes.findIndex(r => r.id === route.id);
    if (pos < 0) {
      return;
    }

    this.httpClient.delete(this.url + '/' + route.id)
      .subscribe(() => {
          this.routes.splice(pos, 1);
          this.routesChangedEvent.next(this.routes.slice());
        }
      );
  }

  /*========== internal helper methods ===========*/

  // get route by id
  getRoute(id: string): Route | null {
    for (const route of this.routes) {
      if (route.id == id) {
        return route;
      }
    };
    return null;
  }

  // generate random route id
  private generateRouteId() {
    const keyLength = 15;
    var i, key = "",
      characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for (i = 0; i < keyLength; i++) {
      key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
    }
    return key;
  }
}