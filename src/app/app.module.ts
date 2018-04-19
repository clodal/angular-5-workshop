import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JokeComponent } from './joke.component';


@NgModule({
  declarations: [
    AppComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [JokeComponent]
})
export class AppModule { }
