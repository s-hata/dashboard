import { Component, OnInit } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

@Component({
  selector: 'app-navbar',
  template: require('pug-loader!./navbar.component.pug')(),
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  title = 'Dashborad';

  constructor() { }

  ngOnInit() {
  }

}
