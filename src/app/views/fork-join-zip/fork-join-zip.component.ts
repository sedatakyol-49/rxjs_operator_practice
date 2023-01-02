import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {delay, map, take} from 'rxjs/operators'
import {forkJoin, fromEvent, interval, of, pipe, zip} from  'rxjs'

@Component({
  selector: 'app-fork-join-zip',
  templateUrl: './fork-join-zip.component.html',
  styleUrls: ['./fork-join-zip.component.sass']
})
export class ForkJoinZipComponent implements OnInit ,AfterViewInit {

  @ViewChild('sandwichButton') sandwichButton:ElementRef | undefined;
  @ViewChild('burgerButton') burgerButton:ElementRef | undefined;

  constructor(private httpClient:HttpClient) { }


  ngOnInit(): void {


  }

  ngAfterViewInit(): void {
    // const source1$=of('Hello');
    // const source2$=of('World').pipe(delay(1000))
    // const source3$=of('Goodbye').pipe(delay(2000))
    // const source4$=of('World').pipe(delay(8000))

    // zip([source1$,source2$,source3$,source4$]).subscribe((res)=>{
    //   console.log(res)
    // })

    const myPromise = (val:any) =>
  new Promise(resolve =>
    setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
  );

  // ‘forkJoin’ waits for each HTTP request to complete and group’s 
  // all the observables returned by each HTTP call into a single observable array 
  // and finally return that observable array.
    const examp=forkJoin({
      //emit 'Hello'immediately
      sourceOne:of('Hello'),
      //emir 'World' after 1 second
      sourceTwo:of('World').pipe(delay(10000)),
      //emit 0 after 1 second
      sourceThree:interval(1000).pipe(take(3)),
      //emit 0...1 in 1 second interval
  sourceFour: interval(1000).pipe(take(11)),
  //promise that resolves to 'Promise Resolved' after 5 seconds
  sourceFive: myPromise('RESULT')
    });

    const subscribe = examp.subscribe(val => console.log(val));


    // const btn1$=fromEvent(this.sandwichButton?.nativeElement,"click").pipe(
    //   map((d:any)=>d.target.innerHtml),
    //   take(2)
    // );
    // const btn2$=fromEvent(this.burgerButton?.nativeElement,"click").pipe(
    //   map((d:any)=>d.target.innerHtml),
    //   take(2)
    // );

    // zip(btn1$,btn2$).subscribe(d=>console.log(d))
  }

  

  calAPI(){
    const obsData$=this.httpClient.get('https://baconipsum.com/api/?type=meat-ad-filter').pipe(delay(500));

    const obsDataTwo$=this.httpClient.get('https://baconipsum.com/api/?type=meat-ad-filter').pipe(delay(500))

    forkJoin([obsData$,obsDataTwo$]).subscribe(([one,two])=>{
      console.log(one,two)
    });
  }

}
