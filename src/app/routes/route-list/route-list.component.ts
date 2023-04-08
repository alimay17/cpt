import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Route } from '../route.model';
import { RouteService } from '../route.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cpt-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit, OnDestroy {
  
  // properties
  routes!: Route[];
  private sub!:  Subscription;
  private myPath!: boolean;
  

  // constructor
  constructor(
    private routeService: RouteService,
    private path: ActivatedRoute
  ){}

  // implements
  ngOnInit(): void {
    this.sub = this.routeService.routesChangedEvent.subscribe(
      (routes: Route[]) => {
        this.routes = routes;
      }
    )
    console.log(this.path.pathFromRoot[1]);

    this.routeService.getRoutes();
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }
}
