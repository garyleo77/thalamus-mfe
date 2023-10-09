import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { FLIGHTS_ROUTES } from './flights.routes';
import { AuthLibModule } from 'auth-lib';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  imports: [
    CommonModule,
    AuthLibModule,
    NgxDatatableModule,
    SharedLibModule,
    RouterModule.forChild(FLIGHTS_ROUTES)
  ],
  declarations: [
    FlightsSearchComponent
  ]
})
export class FlightsModule { }
