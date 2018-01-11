import { Component, OnInit, Input,ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
  //Native (only in the browser supporting Shadow Dom)
  // Emulated(default, Shadow DOM)
  //None (No Shadow Dom),global effection
})
export class ServerElementComponent implements OnInit {

  //add a decorator to show which property you want to expose 
  @Input('serverFromServerElementComponent') element: { type: string, name: string, content: string }
  constructor() { }

  ngOnInit() {
  }

}
