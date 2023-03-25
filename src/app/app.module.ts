import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DndModule } from 'ng2-dnd';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home/home.component';
import { RoutesComponent } from './routes/routes.component';
import { ShipsComponent } from './ships/ships.component';
import { PilotsComponent } from './pilots/pilots.component';
import { RouteEditComponent } from './routes/route-edit/route-edit.component';
import { RouteDetailComponent } from './routes/route-detail/route-detail.component';
import { RouteListComponent } from './routes/route-list/route-list.component';
import { ShipEditComponent } from './ships/ship-edit/ship-edit.component';
import { ShipDetailComponent } from './ships/ship-detail/ship-detail.component';
import { ShipListComponent } from './ships/ship-list/ship-list.component';
import { PilotEditComponent } from './pilots/pilot-edit/pilot-edit.component';
import { PilotDetailComponent } from './pilots/pilot-detail/pilot-detail.component';
import { PilotListComponent } from './pilots/pilot-list/pilot-list.component';
import { PilotItemComponent } from './pilots/pilot-list/pilot-item/pilot-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RoutesComponent,
    ShipsComponent,
    PilotsComponent,
    RouteEditComponent,
    RouteDetailComponent,
    RouteListComponent,
    ShipEditComponent,
    ShipDetailComponent,
    ShipListComponent,
    PilotEditComponent,
    PilotDetailComponent,
    PilotListComponent,
    PilotItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
