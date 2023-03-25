import { Component, Input } from '@angular/core';
import { Route } from '../../route.model';

@Component({
  selector: 'cpt-route-item',
  templateUrl: './route-item.component.html',
  styleUrls: ['./route-item.component.css']
})
export class RouteItemComponent {
  @Input() route!: Route;
}
