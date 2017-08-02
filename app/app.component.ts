// imports the Component world from the angular js framework
import { Component } from '@angular/core';
//@Component its a decorator which tells the thata the class below belongs to a Component
@Component({
  selector: 'my-app',
  template: `
  <div class ="container">
    <h1>My First Angular 2 App</h1>
    <div class="row">
      <div class="col-md-4 col-md-offset-2">
        <h2><marquee direction="right">Welcome buddy !!</marquee></h2>
      </div>
    </div>
  </div>
  `
})
//thic class holds the data and required documents
export  class AppComponent{

}
