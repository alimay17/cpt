import { Component } from '@angular/core';
import { Pilot } from '../pilot.model';

@Component({
  selector: 'cpt-pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrls: ['./pilot-detail.component.css']
})
export class PilotDetailComponent {

  // properties
  pilot!: Pilot;

}
