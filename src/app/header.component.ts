import { Component } from '@angular/core';

@Component({
  selector: 'cpt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isMenuCollapsed = true;
}