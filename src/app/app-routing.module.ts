import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RouteDetailComponent } from './routes/route-detail/route-detail.component';
import { RouteEditComponent } from './routes/route-edit/route-edit.component';
import { RoutesComponent } from './routes/routes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // routes
  { path: 'routes', component: RoutesComponent, children:[
    { path: ':id', component: RouteDetailComponent },

  ] },
  { path: 'routes/:id/edit', component: RouteEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
