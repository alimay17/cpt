import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Route } from '../route.model';
import { RouteService } from '../route.service';

@Component({
  selector: 'cpt-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit, OnDestroy {
  
  // properties
  routes!: Route[];
  private sub!:  Subscription;

  // constructor
  constructor(
    private routeService: RouteService
  ){}

  // implements
  ngOnInit(): void {
    this.sub = this.routeService.routesChangedEvent.subscribe(
      (routes: Route[]) => {
        this.routes = routes;
      }
    )

    this.routeService.getRoutes();
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }
}
