import { Injectable } from '@angular/core';
import { Http ,Headers} from '@angular/http';

/*this decorator is required if you plan on injecting a service into a servie--- 
inject the build in  angular http service, which gives us some methods we need for
 sending some requests  */

@Injectable()
export class ServerService {

    constructor(private http: Http) {}

    storeServers(servers: any[]) {
        const headers=new Headers({'Content-Type':"application/json"});
        return this.http.post('https://udemy-ng-http-2d953.firebaseio.com/data.json',
         servers,
         {headers:headers});
    }
}