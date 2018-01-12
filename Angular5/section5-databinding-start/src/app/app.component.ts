import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serversFromAppComponent = [{ type: "server", name: "test server", content: "just a test" }];


  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serversFromAppComponent.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serversFromAppComponent.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  onChangeFirstElement() {
    this.serversFromAppComponent[0].name = "First Element Name Changed!";

  }

  onDestroyFirstElement() {
    this.serversFromAppComponent.splice(0, 1);

  }
}
