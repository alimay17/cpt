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
    private myRoute: ActivatedRoute
  ){}

  // implements
  ngOnInit(): void {
    // this.myRoute.params.subscribe(
    //   (params: Params) => {
    //     let id = params['id'];
    //     // this.route = this.routeService.getRoute(id)!;

    //     console.log(this.route, ' : ', id);
    //   }
    // )
  }

}
