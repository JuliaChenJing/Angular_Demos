import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { }

  add (a:number, b:number) {
   return a + b;
  }

}
