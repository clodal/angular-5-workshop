import { Component } from '@angular/core';

@Component({
  selector: 'joke-list',
  template: `
  <div class="card mb-3" *ngFor="let joke of jokes" style="width: 320px;">
    <div class="card-body">
      <h4 class="card-title">{{joke.setup}}</h4>
      <p class="card-text">{{joke.punchline}}</p>
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
      }, {
        setup: 'What kind of cheese do you use to disguise a small horse?',
        punchline: 'Mask-a-pony (Mascarpone)',
      },
      {
        setup: 'A kid threw a lump of cheddar at me',
        punchline: 'I thought \'That’s not very mature.\'',
      },
    ];
  }
}
