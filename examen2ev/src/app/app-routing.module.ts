import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExButtonComponent } from './exbutton/exbutton.component';

const routes: Routes = [
  {path:'exbutton',component:ExButtonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
