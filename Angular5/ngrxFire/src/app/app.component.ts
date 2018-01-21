import { Component } from '@angular/core';

/*the ngrx Store works just like angular service,
we can inject it into our components to share a single source of data*/
import { Store } from '@ngrx/store';
/*
   Once the reducer has created the new state, it is saved in a datastore which can be thought as
  a client side database more or less. 
    
  In ngrx, we treat this datastore as Observable so we can subscribe to it from anywhere of
  the application.*/
import { Observable } from 'rxjs/Observable';


//when using Store you need an interface that will define your app state

interface AppState {
  messageReducer: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  message$: Observable<string>;//message is an Obervalble with type string

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('messageReducer');
  }

  /*In redux, the only way to change the state is by dispatching an action.*/
  spanishMessage() {
    this.store.dispatch({ type: 'Chinese' });//dispatch：分派
  }

  frenchMessage() {
    this.store.dispatch({ type: 'FRENCH' });
  }

}
