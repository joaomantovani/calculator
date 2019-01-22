import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CalculatorComponent } from './calculator/calculator.component';
import { VisorComponent } from './calculator/visor/visor.component';
import { ButtonComponent } from './calculator/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    VisorComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
