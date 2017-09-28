import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { RegisteAccountComponent } from './registe-account/registe-account.component';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: require('pug-loader!./app.component.pug')(),
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor(public dialog: MdDialog) { }

  toggle(event) {
    console.log("toggle");
  }

  openRegisteAccount(event) {
    let dialogRef = this.dialog.open(RegisteAccountComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
