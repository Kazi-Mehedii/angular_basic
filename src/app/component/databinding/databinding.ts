import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {

  myName = "mehedi";

  homedistrict = "Bogura";

     
  className = "primary";

  inputtype = 'checkbox';

  showwelcomeMessge(){
    alert("Welcome to learning Angular")
  }

  onStatechenged(){
    alert("State Changed")
  }

  changedMyname(text: string){
    this.myName = text;
  }

}
