import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RouteDetailComponent } from './routes/route-detail/route-detail.component';
import { RouteEditComponent } from './routes/route-edit/route-edit.component';
import { RoutesComponent } from './routes/routes.component';
import { ShipDetailComponent } from './ships/ship-detail/ship-detail.component';
import { ShipEditComponent } from './ships/ship-edit/ship-edit.component';
import { ShipsComponent } from './ships/ships.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // routes
  { path: 'routes', component: RoutesComponent, children:[
  //   { path: ':id', component: RouteDetailComponent },
  //   { path: 'new', component: RouteEditComponent },
  //   { path: ':id/edit', component: RouteEditComponent },

  ] },

  //ships
  // { path: 'ships', component: ShipsComponent, children:[
  //   { path: ':id', component: ShipDetailComponent }
  // ] },
  // { path: 'ships/edit', component: ShipEditComponent },
  // { path: 'ships/:id/edit', component: ShipEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
