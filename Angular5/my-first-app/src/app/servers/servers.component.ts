import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  /*template: `<app-server></app-server>
  <app-server></app-server>`,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  userName: string = '';
  showSecret: boolean = false;
  log=[];
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!;'
  serverName: string = '';

  serverCreated: boolean = false;
  servers = ['Test Server 1', 'Test Server 2']

  constructor() {
    setTimeout(() => { this.allowNewServer = true }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName)
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUser(event: Event) {
    this.userName = '';
  }

  onClicking(event: Event){
    this.showSecret=!this.showSecret;
    this.log.push(this.log.length+1);
  }
}
