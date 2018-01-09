import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  /*template: `<app-server></app-server>
  <app-server></app-server>`,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!;'
  serverName: string = 'TestServer';
  userName:string='';
  serverCreated:boolean=false;

  constructor() {
    setTimeout(() => { this.allowNewServer = true }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is '+this.serverName;
    this.serverCreated=true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUser(event: Event) {
    this.userName='';
  }

}
