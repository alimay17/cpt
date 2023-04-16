import { Component, OnInit } from '@angular/core';
import { mockPilots } from '../mockPilotData';
import { Pilot } from '../pilot.model';
import { PilotService } from '../pilot.service';

@Component({
  selector: 'cpt-pilot-list',
  templateUrl: './pilot-list.component.html',
  styleUrls: ['./pilot-list.component.css']
})
export class PilotListComponent implements OnInit {

  // properties
  pilots!: Pilot[];

  // constructor
  constructor(
    private pilotService: PilotService
  ){}

  // implements
  ngOnInit(): void {
    this.pilots = this.pilotService.getPilots();
  }

  // methods


}
