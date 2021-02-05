import {Component,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-exbutton',
  templateUrl: './exbutton.component.html',
  styleUrls: ['./exbutton.component.css']
})

export class ExButtonComponent {
  @Input() boton = "“Listo para hacer clic”";
  ngOnInit() {
    
  }
}





