import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Route } from '../route.model';
import { RouteService } from '../route.service';

@Component({
  selector: 'cpt-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.css']
})
export class RouteDetailComponent implements OnInit {

  //properties
  route!: Route;

  // constructor
  constructor(
    private routeService: RouteService,
    private router: Router,
    private myRoute: ActivatedRoute
  ) {}

  // implements
  ngOnInit(): void {
    this.myRoute.params.subscribe(
      (params: Params) => {
        let id = params['id'];
        this.route = this.routeService.getRoute(id)!;
      }
    )
    this.routeService.routesChangedEvent.subscribe(() => {
      this.route = this.routeService.getRoute(this.route.id)!;
    })
  }

  // methods
  onDelete() {
    this.routeService.deleteRoute(this.route);
    this.router.navigate(['/routes']);
  }

  onChangeStatus() {
    this.route.status = !this.route.status;
    this.routeService.updateRoute(this.route, this.route);
  }

}