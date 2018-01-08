import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//the name of the component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /*styles: [`h3 {
    color:red;
}
  `]*/
})
export class AppComponent {
  title = 'Julia just changed it';
  name = '';
}

