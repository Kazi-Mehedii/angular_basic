import { Component } from '@angular/core';

@Component({
  selector: 'app-variable',
  imports: [],
  templateUrl: './variable.html',
  styleUrl: './variable.css',
})
export class Variable {

  // variable

  // string

  framwork: string = "Angular 21"

  currentVirsion = "v.21"

  //number float int doubl all are in number type

  mywight : number = 62

  myage = 27.5

  // boolen

  isalive : boolean = true;

  isimortal = false;

  //date

  currentDate : Date = new Date();

  //array string

  myHoby: string[] = ["Reading", "wALKING", "coding"];

  //array nmuber

  digit = [1,2,3,4,5,];

  // object data type

  studentObj = {
    name: "mehedi",
    mobile: "1234567890",
    age: "27"
  };

  // arrayobject

  divission = [

    {name: 'Raj', DistricT: 'Boguura'},
    {name: 'Dhaka', District : "Naranjg"},
    {name: 'Rangpur'}
  ]

  // constructor all variable initialize there

  constructor(){
    this.currentVirsion = "21"

    this.myage = 25
  }

}
