import { Injectable } from '@angular/core';
import { Pilot } from './pilot.model';
import { mockPilots } from './mockPilotData';


@Injectable({
  providedIn: 'root'
})
export class PilotService {

  // properties
  pilots: Pilot[] = []

  constructor() { }

  getPilots(){
    this.pilots = mockPilots;
    return this.pilots.slice();
  }
}
