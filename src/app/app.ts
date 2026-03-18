import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Databinding } from "./component/databinding/databinding";
import { Variable } from "./component/variable/variable";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Databinding, Variable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularBasic');
}
