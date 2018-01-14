import {
  Component, OnInit, Input, ViewEncapsulation, OnChanges,
  SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked,
  AfterViewInit, OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';



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
  implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, ElementRef, ViewChild {

  //add a decorator to show which property you want to expose 
  @Input('serverFromServerElementComponent') element: { type: string, name: string, content: string }
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() {
    console.log("constructor called!");
  }

  ngOnInit() {

    console.log("--------------ngOnInit called!");
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log("Text Content of paragraph:" + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("-------------ngOnChanges called!");
    console.log(changes);
  }

  ngDoCheck() {
    console.log("-------------ngDoCheck called!");
  }

  ngAfterContentInit() {

    console.log("----------ngAfterContentInit called!");
    console.log("Text Content of paragraph:" + this.paragraph.nativeElement.textContent)

  }

  ngAfterContentChecked() {

    console.log("-----------ngAfterContentChecked called!");

  }


  ngAfterViewInit() {

    console.log("-----------ngAfterViewInit called!");
    console.log('Text Content: ' + this.header.nativeElement.textContent);

  }


  ngAfterViewChecked() {

    console.log("----------ngAfterViewChecked called!");

  }

  ngOnDestroy() {

    console.log("------------ngOnDestroy called!");

  }


}
