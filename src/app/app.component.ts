import { Component } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

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
}
