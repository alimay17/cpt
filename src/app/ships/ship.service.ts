import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { mockShips } from './mockShipData';
import { Ship } from './ship.model';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  // properties
  ships: Ship[] = [];

  //events
  shipsChangedEvent = new Subject <Ship[]>();

  // constructor
  constructor() { }

  getShips() {
    this.ships = mockShips;
    this.shipsChangedEvent.next(this.ships.slice());
  }
}
