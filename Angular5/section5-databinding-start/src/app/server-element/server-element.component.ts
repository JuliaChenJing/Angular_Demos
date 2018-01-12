import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';



@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
  //Native (only in the browser supporting Shadow Dom)
  // Emulated(default, Shadow DOM)
  //None (No Shadow Dom),global effection
})
export class ServerElementComponent implements OnInit, OnChanges {

  //add a decorator to show which property you want to expose 
  @Input('serverFromServerElementComponent') element: { type: string, name: string, content: string }
  @Input() name:string;
  constructor() {
    console.log("constructor called!");
  }

  ngOnInit() {

    console.log("ngOnInit called!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!");
    console.log(changes);
  }
}
