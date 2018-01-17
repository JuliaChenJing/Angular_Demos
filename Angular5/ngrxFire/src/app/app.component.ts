import { Component } from '@angular/core';

//the ngrx Store works just like angular service,
//we can inject it into our components to share a single source of data
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
//when using Store you need an interface that will define your app state

interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message$: Observable<string>;
  constructor(private store: Store<AppState>) {

    this.message$ = this.store.select('message');

  }

  spanishMessage() {
    this.store.dispatch({ type: 'Chinese' });
  }

  frenchMessage() {
    this.store.dispatch({ type: 'FRENCH' });
  }


}
