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

  // routes
  { path: 'routes', component: RoutesComponent, children:[
    { path: 'new/r', component: RouteEditComponent },
    { path: ':id/r', component: RouteDetailComponent },
    { path: 'r/edit', component: RouteEditComponent },
    { path: ':id/r/edit', component: RouteEditComponent },
  ] },

  //ships
  { path: 'ships', component: ShipsComponent, children:[
    { path: 'new', component: ShipEditComponent },
    { path: ':id/s', component: ShipDetailComponent },
    { path: 'r/edit', component: ShipEditComponent },
    { path: ':id/s/edit', component: ShipEditComponent },
  ] },
  
  // home
  { path: 'home', component: HomeComponent, children: [
    { path: 'new/r', redirectTo: '/routes/new/r'},
    { path: ':id/r', redirectTo: '/routes/:id/r'},
    { path: 'new/s', redirectTo: '/ships/new/s'},
    { path: ':id/s', redirectTo: '/ships/:id/s'},    
  ] },

  // global
  { path: ' ', redirectTo: 'home' },
  // { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
