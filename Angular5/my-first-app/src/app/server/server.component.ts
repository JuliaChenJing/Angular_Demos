import { Component, Input, OnInit } from '@angular/core';


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
    @Input() serverFromServerComponent: ServerComponent;

    constructor(serverName: string, serverId: number) {
        this.serverName = serverName;
        this.serverId = serverId;
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }


    /*
Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the 
constructor. The constructor should only be used to initialize class members but shouldn't 
do actual "work".
 
So you should use constructor() to setup Dependency Injection and not much else. ngOnInit()
 is better place to "start" - it's where/when components' bindings are resolved.*/
    ngOnInit() {
    }
    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
   
}