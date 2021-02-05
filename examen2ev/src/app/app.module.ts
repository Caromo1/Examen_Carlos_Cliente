import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExButtonComponent } from './exbutton/exbutton.component';
import { EXSecondViewComponent } from './exsecondview/exsecondview.component';

@NgModule({
  declarations: [
    AppComponent,
    ExButtonComponent,
    EXSecondViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
