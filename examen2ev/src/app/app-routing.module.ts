import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExButtonComponent } from './exbutton/exbutton.component';
import { EXSecondViewComponent } from './exsecondview/exsecondview.component';

const routes: Routes = [
  {path:'exbutton',component:ExButtonComponent},
  {path:'exsecondview',component:EXSecondViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
