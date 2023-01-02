import { Component, OnInit } from '@angular/core';
import {interval,timer} from 'rxjs'

@Component({
  selector: 'app-interval-and-timer',
  templateUrl: './interval-and-timer.component.html',
  styleUrls: ['./interval-and-timer.component.sass']
})
export class IntervalAndTimerComponent implements OnInit {

  intervalData:number=0;
  timerData:number=0;

  constructor() { }

  ngOnInit(): void {
    const obsInterval$=interval(500) // every 10 second emit 1
    const obsTimer$=timer(2000,500) //after 2 second emit 1

    obsInterval$.subscribe(res=>{
      this.intervalData=res
    })

    obsTimer$.subscribe(res=>{
      this.timerData=res
    })
  }

}
