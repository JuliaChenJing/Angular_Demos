import { Component } from '@angular/core';
import { ServerService } from 'app/server.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appName1 = "Test1";
  appName2 = this.serverService.getAppName();

  servers = [
    {
      name: 'First Server',
      capacity: 100,
      id: this.generateId()
    },
    {
      name: 'Second Server',
      capacity: 200,
      id: this.generateId()
    }
  ];

  //it is like a local variable declearation
  constructor(private serverService: ServerService) { }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSave() {
    this.serverService.storeServers(this.servers).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onGet() {
    this.serverService.getServers().subscribe(
      (servers: any[]) => {
        this.servers = servers;
        console.log(servers);
      },
      (error) => console.log(error)
    );
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }


}
