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
  routesChangedEvent = new Subject <Route[]>();

  // constructor
  constructor(
    // private httpClient: HttpClient;
  ) { }

  /*============ Server Connection Methods =============*/
  
    getRoutes() {
      this.routes = mockRoutes; 
      this.routesChangedEvent.next(this.routes.slice());
    }

    // get route by id
    getRoute(id: string): Route | null {
      for (const route of this.routes){
        if(route.id == id){
          console.log(route);
          return route;
        }
      };
      return null;
    }
}
