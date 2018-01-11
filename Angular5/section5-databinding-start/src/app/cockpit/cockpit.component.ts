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
  
  @Output() serverCreatedFromCockpit = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreatedFromCockpit = new EventEmitter<{ serverName: string, serverContent: string }>();


  ngOnInit() {
  }


  onAddServer() {
    this.serverCreatedFromCockpit.emit({
      serverName: this.editedServerName,
      serverContent: this.editedServerContent
    });
  }

  onAddBlueprint() {
    this.serverCreatedFromCockpit.emit({
      serverName: this.editedServerName,
      serverContent: this.editedServerContent
    });
  }

}
