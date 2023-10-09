import {Component} from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthLibService } from 'auth-lib';


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css']
})
export class FlightsSearchComponent {
  columns = [{
    prop: 'name',
  },{
    prop: 'timeAvailable',
  },{
    prop: 'timeRequested',
  },{
    prop: 'timeOverage',
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
