import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteDetailComponent } from './routes/route-detail/route-detail.component';
import { RouteEditComponent } from './routes/route-edit/route-edit.component';

import { RoutesComponent } from './routes/routes.component';

const routes: Routes = [
  // routes
  { path: '', component: RoutesComponent, children: [
    { path: 'new', component: RouteEditComponent },
    { path: ':id', component: RouteDetailComponent },
    { path: ':id/edit', component: RouteEditComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
