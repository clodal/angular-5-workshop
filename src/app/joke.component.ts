import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
        <h6 *ngIf="id">{{ id }}</h6>
        <h4 class="card-title">
          {{ joke.setup }}
        </h4>
        <p class="card-text" [hidden]="joke.hide">
          {{ joke.punchline }}
        </p>
        <button class="btn btn-primary" (click)="joke.toggle()" role="button">
          Tell me
        </button>
        <button class="btn btn-danger" (click)="deleteJoke()" role="button">
          Delete
        </button>
      </div>
    </div>
  `
})
export class JokeComponent {
  @Input() joke: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();
  id: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  deleteJoke() {
    this.jokeDeleted.emit(this.joke);
  }
}
