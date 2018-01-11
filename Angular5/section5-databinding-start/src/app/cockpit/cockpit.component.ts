import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  editedServerName = '';
  editedServerContent = '';
  
  @Output() serverCreatedFromCockpitComponent = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreatedFromCockpitComponent= new EventEmitter<{ serverName: string, serverContent: string }>();


  ngOnInit() {
  }


  onAddServer() {
    this.serverCreatedFromCockpitComponent.emit({
      serverName: this.editedServerName,
      serverContent: this.editedServerContent
    });
  }

  onAddBlueprint() {
    this.serverCreatedFromCockpitComponent.emit({
      serverName: this.editedServerName,
      serverContent: this.editedServerContent
    });
  }

}
