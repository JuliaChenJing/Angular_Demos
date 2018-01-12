import { Component, OnInit, Input, ViewEncapsulation, OnChanges, 
  SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked ,OnDestroy} from '@angular/core';
import { AfterViewChecked, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';





@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
  //Native (only in the browser supporting Shadow Dom)
  // Emulated(default, Shadow DOM)
  //None (No Shadow Dom),global effection
})
export class ServerElementComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit,OnDestroy {

  //add a decorator to show which property you want to expose 
  @Input('serverFromServerElementComponent') element: { type: string, name: string, content: string }
  @Input() name: string;
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

  ngDoCheck() {
    console.log("ngDoCheck called!");
  }

  ngAfterContentInit() {

    console.log("ngAfterContentInit called!");

  }


  ngAfterContentChecked() {

    console.log("ngAfterContentChecked called!");

  }


  ngAfterViewInit() {

    console.log("ngAfterViewInit called!");

  }


  ngAfterViewChecked() {

    console.log("ngAfterViewChecked called!");

  }

  ngOnDestroy() {
    
        console.log("ngOnDestroy called!");
    
      }


}
