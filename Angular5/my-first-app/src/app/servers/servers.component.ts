import { Component, OnInit } from '@angular/core';
import { Server } from '../server/server.model';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {
  userName: string = '';
  showSecret: boolean = false;
  log = [];
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!;'
  editedServerName: string = "test server";

  isServerCreated: boolean = false;
  servers: Server[] = [
    new Server("server1", 1),
    new Server("server2", 2)
  ];


  /*servers = [{ name: 'server1', serverId: 1, serverStatus: 'on' },
  { name: 'server2', serverId: 2, serverStatus: 'off' }];*/

  constructor() {

  }
  /*
  Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the 
  constructor. The constructor should only be used to initialize class members but shouldn't 
  do actual "work".
  
  So you should use constructor() to setup Dependency Injection and not much else. ngOnInit()
   is better place to "start" - it's where/when components' bindings are resolved.*/
  ngOnInit() {
    setTimeout(() => { this.allowNewServer = true }, 2000)
  }

  onCreateServer(id: number) {
    this.serverCreationStatus = 'Server was created! Name is ' + this.editedServerName;
    this.isServerCreated = true;
    this.servers.push(new Server(this.editedServerName, this.servers.length + 1));
  }

  onUpdateServerName(event: Event) {
    this.editedServerName = (<HTMLInputElement>event.target).value;
  }

  onResetUser(event: Event) {
    this.userName = '';
  }

  onClicking(event: Event) {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }

  onRemoveServer(id: number) {
    const position = id;
    this.servers.splice(position, 1);
  }

  onRemoveLog(id: number) {
    const position = id;
    this.log.splice(position, 1);
  }
}

