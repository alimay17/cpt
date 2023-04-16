import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Route } from 'src/app/routes/route.model';
import { RouteService } from 'src/app/routes/route.service';
import { Ship } from '../ship.model';
import { ShipService } from '../ship.service';

@Component({
  selector: 'cpt-ship-edit',
  templateUrl: './ship-edit.component.html',
  styleUrls: ['./ship-edit.component.css']
})
export class ShipEditComponent implements OnInit, OnDestroy {

  // properties
  originalShip!: Ship;
  ship: Ship = new Ship('', '', null, 0, 'Inactive');
  newRouteId!: string;
  routes!: Route[];
  editMode: boolean = false;
  private sub!: Subscription;

  constructor(
    private shipService: ShipService,
    private routeService: RouteService,
    private router: Router,
    private path: ActivatedRoute
  ) {}

  // implements
  ngOnInit(): void {
    this.path.params.subscribe(
      (params: Params) => {
        let id = params['id'];
        if (!id) {
          this.editMode = false;
          return;
        }
        this.originalShip = this.shipService.getShip(id) !;
        if (!this.originalShip) {
          return;
        }
        this.editMode = true;
        this.ship = JSON.parse(JSON.stringify(this.originalShip));
        // this.assignedRoute = this.ship.assignedRoute!;
        this.newRouteId = this.ship.assignedRoute!.id;
      }
    );

    this.sub = this.routeService.routesChangedEvent.subscribe(
      (routes: Route[]) => {
        this.routes = routes;
        // this.assignedRoute = this.routeService.getRoute(this.ship.assignedRoute!.id) !;
      }
    );

    this.routeService.getRoutes();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  // methods
  onSubmit(form: NgForm) {
    
    let value = form.value;    
    this.ship.name = value.name;
    this.ship.capacity = value.capacity;

    if(value.assignedRoute != this.ship.assignedRoute){
      this.ship.assignedRoute = this.routeService.
      getRoute(value.assignedRoute) ? this.routeService.getRoute(value.assignedRoute) : new Route('','','','','',false, []);
    }
    
    if(!this.ship.assignedRoute?.id){
      this.ship.status = 'Inactive';
    }

    if (this.editMode) {
      this.shipService.updateShip(this.originalShip, this.ship);
    } else {
      this.shipService.addShip(this.ship);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.path });
  }

  onChangeStatus() {
    if (this.ship.status === 'Active') {
      this.ship.status = 'Inactive';
    } else {
      this.ship.status = 'Active';
    }
  }
}