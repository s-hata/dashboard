import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

export class Account {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-registe-account',
  template: require('pug-loader!./registe-account.component.pug')(),
  styleUrls: ['./registe-account.component.sass']
})
export class RegisteAccountComponent {
  account: Account = {
    name: '',
    email: '',
    password: ''
  };

  constructor(public dialogRef: MdDialogRef<RegisteAccountComponent>) { }

  close(event): void {
    this.dialogRef.close();
  }
}
