import { Component } from '@angular/core';

class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;
  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }
  toggle() {
    this.hide = !this.hide;
  }
}

@Component({
  selector: 'joke-list',
  template: `
  <div class="card mb-3" *ngFor="let joke of jokes" style="width: 320px;">
    <div class="card-body">
      <h4 class="card-title">{{joke.setup}}</h4>
      <p class="card-text" [hidden]="joke.hide">{{joke.punchline}}</p>
      <button class="btn btn-primary" (click)="joke.toggle()" role="button">Tell me</button>
    </div>
  </div>
` })
export class JokeListComponent {
  jokes: Joke[];
  constructor() {
    this.jokes = [
      new Joke('What did the cheese say when it looked in the mirror?', 'Hello-Me (Halloumi)'),
      new Joke('What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)'),
      new Joke('A kid threw a lump of cheddar at me', 'I thought \'That’s not very mature.\''),
    ];
  }
}
