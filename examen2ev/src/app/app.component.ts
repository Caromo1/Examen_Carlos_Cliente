import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examen2ev';
  @Input() titulo = "Welcome to Web Development!";
  ngOnInit() {
    this.titulo = "Already in!";
    console.log("Change for exercise 3, done");  
   
  }
}
