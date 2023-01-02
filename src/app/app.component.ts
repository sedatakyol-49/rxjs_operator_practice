import { Component, OnInit } from '@angular/core';
import { combineLatest, Subject, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'RXJS Practice';
}
