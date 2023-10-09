import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersSearchComponent } from './users-search/users-search.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { USERS_ROUTES } from './user.routes';
import { AuthLibModule } from 'auth-lib';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  imports: [
    CommonModule,
    AuthLibModule,
    NgxDatatableModule,
    SharedLibModule,
    RouterModule.forChild(USERS_ROUTES)
  ],
  declarations: [
    UsersSearchComponent
  ]
})
export class MfeModule { }
