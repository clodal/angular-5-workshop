import { Component, Input } from '@angular/core';

export class Joke {
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
  selector: 'joke',
  template: `
    <div class="card mb-3" style="width: 320px;">
      <div class="card-body">
        <h4 class="card-title">
          {{ joke.setup }}
        </h4>
        <p class="card-text" [hidden]="joke.hide">
          {{ joke.punchline }}
        </p>
        <button class="btn btn-primary" (click)="joke.toggle()" role="button">
          Tell me
        </button>
      </div>
    </div>
  `
})
export class JokeComponent {
  @Input() joke: Joke;
}
