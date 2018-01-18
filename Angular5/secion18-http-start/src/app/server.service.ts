import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
/*this decorator is required if you plan on injecting a service into a servie--- 
inject the build in  angular http service, which gives us some methods we need for
 sending some requests  */

@Injectable()
export class ServerService {

    constructor(private http: Http) { }

    storeServers(servers: any[]) {
        const headers = new Headers({ 'Content-Type': "application/json" });
        return this.http.put('https://udemy-ng-http-2d953.firebaseio.com/data.json',
            servers,
            { headers: headers });
    }

    getServers() {
        return this.http.get('https://udemy-ng-http-2d953.firebaseio.com/data.json').map(
            (response: Response) => {
                const data = response.json();
                for (const server of data) {
                    server.name = 'FECHED_' + server.name;
                }
                return data;
            }
        );
    }
}