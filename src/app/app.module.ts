import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routes } from './app.router';
import { SuitesComponent } from './suites/suites.component';
import { BookingComponent } from './booking/booking.component';
import { AboutComponent } from './about/about.component';

import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent, BookingComponent, AboutComponent, SuitesComponent
  ],
  imports: [
    BrowserModule, routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
