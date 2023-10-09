import {Component} from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthLibService } from 'auth-lib';


@Component({
  selector: 'app-users-search',
  templateUrl: './users-search.component.html',
  styleUrls: ['./users-search.component.css']
})
export class UsersSearchComponent {
  columns = [{
    prop: 'name',
    name: 'NAME',
    headerClass: 'name-header'
  },{
    prop: 'timeAvailable',
    name: 'INTERVIEW TIME AVAILABLE',
    headerClass: 'time-available-header'
  },{
    prop: 'timeRequested',
    name: 'INTERVIEW TIME REQUESTED',
    headerClass: 'time-requested-header'
  },{
    prop: 'timeOverage',
    name: 'TIME OVERAGE',
    headerClass: 'time-overage-header'
  }];
  rows = [];
  
  constructor(private service: AuthLibService, private route: ActivatedRoute) {
    console.log('User Name', this.service.user);
    console.log('Route Snapshot', this.route.snapshot.data);
    if (this.route.snapshot.data.users) {
      this.rows = this.route.snapshot.data['users'];
    }
  }
}
