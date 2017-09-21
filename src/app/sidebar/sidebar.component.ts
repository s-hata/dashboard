import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: require('pug-loader!./sidebar.component.pug')(),
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
