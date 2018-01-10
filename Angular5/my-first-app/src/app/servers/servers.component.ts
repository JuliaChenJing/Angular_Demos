import { Component} from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  /*template: `<app-server></app-server>
  <app-server></app-server>`,*/
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  userName: string = '';
  showSecret: boolean = false;
  log = [];
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!;'
  serverName: string = "test server";

  serverCreated: boolean = false;
  servers: ServerComponent[] = [
    new ServerComponent("server1", 1),
    new ServerComponent("server2", 2)
  ];


  /*servers = [{ name: 'server1', serverId: 1, serverStatus: 'on' },
  { name: 'server2', serverId: 2, serverStatus: 'off' }];*/

  constructor() {
    setTimeout(() => { this.allowNewServer = true }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer(id: number) {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(new ServerComponent(this.serverName, this.servers.length + 1));
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
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

