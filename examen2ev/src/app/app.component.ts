import { Component,Input,OnInit } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import { ExButtonComponent } from './exbutton/exbutton.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends ExButtonComponent{
  title = 'examen2ev';
  @Input() titulo = "Welcome to Web Development!";
  ngOnInit() {
    this.titulo = "Already in!";
    console.log("Change for exercise 3, done");  
    this.justDoIt();  
  }
}
