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

  // events
  shipsChangedEvent = new Subject <Ship[]>();

  // constructor
  constructor() { }

  /*============ Server Connection Methods =============*/
  getShips(){
    this.ships = mockShips;
    this.shipsChangedEvent.next(this.ships.slice());
  }

  getShip(id: string): Ship | null{
    for (const ship of this.ships){
      if(ship.shipId === id){
        return ship;
      };
    };
    return null;
  }

  // delete one ship
  deleteShip(ship: Ship){
    const pos = this.ships.findIndex(s => s.shipId === ship.shipId);
    if (pos < 0) {
      return;
    }
    this.ships.splice(pos, 1);
    this.shipsChangedEvent.next(this.ships.slice());
  }

  addShip(){

  }

  updateShip(){
    
  }
}
