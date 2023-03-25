import { Component, Input } from '@angular/core';
import { Pilot } from '../../pilot.model';

@Component({
  selector: 'cpt-pilot-item',
  templateUrl: './pilot-item.component.html',
  styleUrls: ['./pilot-item.component.css']
})
export class PilotItemComponent {

  // properties
  @Input() pilot!: Pilot;
}
