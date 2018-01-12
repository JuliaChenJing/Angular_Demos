import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  @Output() serverCreatedFromCockpitComponent = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreatedFromCockpitComponent = new EventEmitter<{ serverName: string, serverContent: string }>();


  ngOnInit() {
  }


  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.serverCreatedFromCockpitComponent.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.serverCreatedFromCockpitComponent.emit({
      serverName: nameInput.value,
      serverContent: contentInput.value,
    });
  }

}
