/**
 * Created by bimal on 2/17/17.
 */
import { Component } from '@angular/core';
import { User } from './shared/models/user';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls:['./app/app.component.css']
})

export class AppComponent {
    message = 'Hello message!';
    users :User[]= [{
        id: 1,
        name: 'Bimal',
        username: 'bimal_parajuli'
    },
    {
        id: 2,
        name: 'Bishal',
        username: 'bishal_poudel'
    },
    {
        id: 3,
        name: 'Pratik',
        username: 'pratik_acharya'
    }
    ];
    activeUser :User;

    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }

    onUserCreated(event){
        this.users.push(event.user);
    }

}