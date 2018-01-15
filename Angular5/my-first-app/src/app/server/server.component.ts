import { Component, Input, OnInit } from '@angular/core';
import { Server } from './server.model';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
      .online{color:white;} `
    ]
})

export class ServerComponent {

 
    @Input() serverFromServerComponent: ServerComponent;



    /*
Mostly we use ngOnInit for all the initialization/declaration and avoid stuff to work in the 
constructor. The constructor should only be used to initialize class members but shouldn't 
do actual "work".
 
So you should use constructor() to setup Dependency Injection and not much else. ngOnInit()
 is better place to "start" - it's where/when components' bindings are resolved.*/
  
   
}