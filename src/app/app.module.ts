import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CalculatorComponent } from './calculator/calculator.component';
import { VisorComponent } from './calculator/visor/visor.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    VisorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
