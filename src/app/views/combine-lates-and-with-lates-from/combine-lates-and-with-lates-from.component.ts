import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, combineLatest, fromEvent, mapTo, Observable, scan, startWith, Subject, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-combine-lates-and-with-lates-from',
  templateUrl: './combine-lates-and-with-lates-from.component.html',
  styleUrls: ['./combine-lates-and-with-lates-from.component.sass']
})
export class CombineLatesAndWithLatesFromComponent implements OnInit ,AfterViewInit {

framework:Array<any>=['React','Angular','Vue','Laravel'];
color:Array<any>=['Red','Blue','Yellow'];

frameworkSubject=new Subject<any>();
colorSubject=new Subject<any>();



  ngOnInit(): void {
    combineLatest([
      this.frameworkSubject.asObservable(),
      this.colorSubject.asObservable(),
    ]).subscribe((d)=>console.log(d))

    // withLatestFrom
    this.frameworkSubject.pipe(withLatestFrom(this.colorSubject)).subscribe(res=>{
      console.log(res)
    })
  }

  ngAfterViewInit(): void {


  }

  onFwChange($event:any){
    const value=$event.target.value;
    this.frameworkSubject.next(value)
  }

  onClChange($event:any){
    const value=$event.target.value;
    this.colorSubject.next(value);
  }

}
