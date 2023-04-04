import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RoutesComponent } from './routes/routes.component';
import { RouteEditComponent } from './routes/route-edit/route-edit.component';
import { RouteDetailComponent } from './routes/route-detail/route-detail.component';
import { RouteListComponent } from './routes/route-list/route-list.component';
import { toString } from 'shared/toString.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoutesComponent,
    RouteEditComponent,
    RouteDetailComponent,
    RouteListComponent,
    
    // pipes
    toString,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
