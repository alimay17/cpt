import { Component, OnInit } from '@angular/core';
import { mockPilots } from '../mockPilotData';
import { Pilot } from '../pilot.model';

@Component({
  selector: 'cpt-pilot-list',
  templateUrl: './pilot-list.component.html',
  styleUrls: ['./pilot-list.component.css']
})
export class PilotListComponent implements OnInit {

  // properties
  pilots!: Pilot[];

  // constructor
  constructor(){

  }

  // implements
  ngOnInit(): void {
    this.pilots = mockPilots;
  }

  // methods

}
