import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-deabounce-time-and-distinct-until-changed',
  templateUrl: './deabounce-time-and-distinct-until-changed.component.html',
  styleUrls: ['./deabounce-time-and-distinct-until-changed.component.sass'],
  providers:[CommonService]
})
export class DeabounceTimeAndDistinctUntilChangedComponent implements OnInit {

  bookKeySubject=new Subject<any>();
  //create observable object
  books$:any

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.bookKeySubject.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe((res)=>{
      this.getBooks(res)
    });
  }

  //create onSearch event
  onSearch($event:any){
    const value=$event.target.value;
    this.bookKeySubject.next(value)
  }

  //create getBooks
  getBooks(value:any){
    //i don't want to subscribe here instead here i did in template with async pipe
    this.books$=this.commonService.getBooks(value)
  }


}