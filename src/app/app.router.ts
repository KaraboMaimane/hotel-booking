import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BookingComponent } from './booking/booking.component';
import { SuitesComponent } from './suites/suites.component';

export const router: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full'},
    { path: 'about', component: AboutComponent },
    { path: 'suites', component: SuitesComponent},
    { path: 'booking', component: BookingComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);