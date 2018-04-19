import { Component } from '@angular/core';

@Component({
  selector: 'joke-list',
  template: `
  <div class="card mb-3" *ngFor="let joke of jokes" style="width: 320px;">
    <div class="card-body">
      <h4 class="card-title">{{joke.setup}}</h4>
      <p class="card-text" [hidden]="joke.hide">{{joke.punchline}}</p>
      <button class="btn btn-primary" (click)="toggle(joke)" role="button">Tell me</button>
    </div>
  </div>
` })
export class JokeListComponent {
  jokes: Object[];
  constructor() {
    this.jokes = [
      {
        setup: 'What did the cheese say when it looked in the mirror?',
        punchline: 'Hello-Me (Halloumi)',
        hide: true,
      },
      {
        setup: 'What kind of cheese do you use to disguise a small horse?',
        punchline: 'Mask-a-pony (Mascarpone)',
        hide: true,
      },
      {
        setup: 'A kid threw a lump of cheddar at me',
        punchline: 'I thought \'That’s not very mature.\'',
        hide: true,
      },
    ];
  }
  toggle(joke) {
    joke.hide = !joke.hide;
  }
}
