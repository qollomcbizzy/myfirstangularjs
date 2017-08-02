// imports the Component world from the angular js framework
import { Component } from '@angular/core';
//@Component its a decorator which tells the thata the class below belongs to a Component
@Component({
  selector: 'my-app',
  template: `
  <h1>My First Angular 2 App</h1>
  `
})
//thic class holds the data and required documents
export  class AppComponent{

}
