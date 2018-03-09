import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StarWarsComponent } from './starwars.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StarWarsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [StarWarsComponent],
  providers: [],
  bootstrap: [StarWarsComponent]
})
export class StarWarsModule { }
