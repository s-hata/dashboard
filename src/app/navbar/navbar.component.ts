import { Component, OnInit } from '@angular/core';

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
