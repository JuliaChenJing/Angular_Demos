import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core/src/metadata/view';

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
