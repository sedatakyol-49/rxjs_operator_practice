import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, delay, interval, map, mergeMap, of, retryWhen, scan, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-retry-when-delay-scan',
  templateUrl: './retry-when-delay-scan.component.html',
  styleUrls: ['./retry-when-delay-scan.component.scss']
})
export class RetryWhenDelayScanComponent implements OnInit {

  isBusy:boolean=false;
  dataSubject$=new BehaviorSubject<any>('')
  data$:any=this.dataSubject$.asObservable();

  scanSubject=new Subject();
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    //Scan
    // Useful for encapsulating and managing state. Applies an accumulator (or "reducer function") 
    // to each value from the source after an initial state is established -- either via a seed value
    //  (second argument), or from the first value from the source.
    // const scanExamp=this.scanSubject.subscribe(val=>console.log('Accumulated object:',val))
    // this.scanSubject.next({name:'Joe'});
    // this.scanSubject.next({age:30})
    // this.scanSubject.next({favoriteLanguage:'Javascript'})
  }

  getData(){
    const data=this.httpClient.get('https://baconipsum.com/api/?type=meat-ad-filter').pipe(
      retryWhen((error)=>error.pipe(delay(1000),scan((retryCount)=>{
      console.log(retryCount)
      if(retryCount>=5){
        throw error;
      }
      else{
        retryCount=retryCount
      }
      return retryCount;
      },0)))
    );
    data.subscribe((res)=>{
      this.dataSubject$.next(res)
      this.isBusy=true
    })
  }

}
