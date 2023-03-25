import { Component, OnInit } from '@angular/core';
import { mockRoutes } from '../mockRouteData';
import { Route } from '../route.model';

@Component({
  selector: 'cpt-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {
  
  // properties
  routes!: Route[];

  // constructor

  // implements
  ngOnInit(): void {
    this.routes = mockRoutes;
  }
}
