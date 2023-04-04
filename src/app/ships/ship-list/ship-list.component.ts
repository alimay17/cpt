import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ship } from '../ship.model';
import { ShipService } from '../ship.service';

@Component({
  selector: 'cpt-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit, OnDestroy{
  // properties
  ships!: Ship[];
  private sub!: Subscription;

  // constructor
  constructor(
    private shipService: ShipService
  ){}

  // implements
  ngOnInit(): void {
    this.sub = this.shipService.shipsChangedEvent.subscribe(
      (ships: Ship[]) => {
        this.ships = ships;
      }
    )
    this.shipService.getShips();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
