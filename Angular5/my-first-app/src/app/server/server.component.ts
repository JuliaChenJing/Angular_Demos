import { Component, Input } from '@angular/core';
import { ServersComponent } from '../servers/servers.component';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
      .online{color:white;} `
    ]
})

export class ServerComponent {


    serverName: string = '';
    serverId: number = 0;
    serverStatus: string = 'off';
    @Input() element: ServerComponent;

 


    constructor(serverName: string, serverId: number) {
        this.serverName = serverName;
        this.serverId = serverId;
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    ngOnInit() {

    }

}