export class Server {

    serverName: string = '';
    serverId: number = 0;
    serverStatus: string = 'off';

    constructor(serverName: string, serverId: number) {
        this.serverName = serverName;
        this.serverId = serverId;
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    ngOnInit() {
    }
    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
