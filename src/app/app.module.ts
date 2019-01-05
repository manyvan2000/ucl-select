import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UclSelect } from './ucl-select/ucl-select.component';

@NgModule({
  declarations: [
    AppComponent, 
    UclSelect
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
