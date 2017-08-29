// imports the Component world from the angular js framework
import { Component } from '@angular/core';
//@Component its a decorator which tells the thata the class below belongs to a Component
@Component({
  selector: 'my-app',
  template: `
  <div class ="container">
    <h1 class="col-md-6 col-md-offset-2">My First Angular 2 App</h1>
    <h3>one of my favorite bands is : { {favoriteband}}</h3>
    <div class="row">
      <div class="col-md-4 col-md-offset-2">
        <h2><marquee direction="right">Welcome buddy !!</marquee></h2>
      </div>
      <div class="col-md-8 col-md-offset-1">
      <p>This my first angular js just took me almost a :{{numberofDays}} day to be familiar with<br/>
      Its cool and nice to use in programming using :{{ favoritelanguage}}</p>
      </div>
    </div>
    <p>{{favoritealbum.title}}</p>
    <p>By :{{favoritealbum.artist}}</p>
    <p>Released on :{{favoritealbum.releasedDate}}</p>
  </div>
  <div class= "container">
    <div class="row">
      <form id="signup">
       <h3 class="col-md-4 col-md-offset-3">Sign up</h3>
        <div class="col-md-4 col-md-offset-2">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username">
          <label for="password" >Password</label>
          <input type="password" class="form-control" id="password">
          <button type="submit" class="btn btn-primary">sign in </button>
      </div>
      </form>
    </div>
  </div>
  `
})
//thic class holds the data and required documents
export  class AppComponent{
 favoriteband: string = 'the cure';
 favoritelanguage :string = "Javascript";
 numberofDays :number=34568;
 favoritealbum:Album=new Album("ongengo studeios","ongengo",2001);
  
}
export class Album{
  constructor(public title : string,public artist :string,public releasedDate:number ){

  }
}
