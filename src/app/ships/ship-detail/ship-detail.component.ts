import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Route } from 'src/app/routes/route.model';
import { Ship } from '../ship.model';
import { ShipService } from '../ship.service';

@Component({
  selector: 'cpt-ship-detail',
  templateUrl: './ship-detail.component.html',
  styleUrls: ['./ship-detail.component.css']
})
export class ShipDetailComponent implements OnInit {

  // properties
  ship!: Ship;
  assignedRoute!: Route;

  // constructor
  constructor(
    private shipService: ShipService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // implements
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        let id = params['id'];
        this.ship = this.shipService.getShip(id) !;
        this.assignedRoute = this.ship.assignedRoute!;
      }
    )
  }

  // methods
  onChangeStatus() {
    if (this.ship.status === 'Active') {
      this.ship.status = 'Inactive';
    } else {
      this.ship.status = 'Active';
    }
  }

  onDelete() {
    this.shipService.deleteShip(this.ship);
    this.router.navigate(['/ships']);
  }
}