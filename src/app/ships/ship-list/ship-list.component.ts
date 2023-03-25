import { Component, OnInit } from '@angular/core';
import { Ship } from '../ship.model';
import { mockShips } from '../mockShipData';

@Component({
  selector: 'cpt-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit{
  // properties
  ships!: Ship[];

  // constructor
  constructor(){}

  // implements
  ngOnInit(): void {
    this.ships = mockShips;
  }
}
