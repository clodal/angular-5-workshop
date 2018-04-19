import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JokeComponent } from './joke.component';
import { JokeListComponent } from './jokelist.component';


@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [JokeListComponent]
})
export class AppModule { }
