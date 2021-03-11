import { Component } from '@angular/core';

@Component({
  // {} : obje demektir
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'northwind';
  user: string = 'Beytullah';
  // any = her veri türü olabilir demek ve yazmasak da olur
  
}
