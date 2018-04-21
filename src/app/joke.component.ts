import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';
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
export class JokeComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() joke: Joke;
  @Output() jokeDeleted = new EventEmitter();
  id: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnChanges() {
    console.log(`ngOnChanges - joke is ${this.joke}`);
  }
  ngOnInit() {
    console.log(`ngOnInit  - joke is ${this.joke}`);
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  deleteJoke() {
    this.jokeDeleted.emit(this.joke);
  }
}
