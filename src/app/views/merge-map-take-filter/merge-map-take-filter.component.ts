import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {mergeMap ,map, filter, take} from 'rxjs/operators'
import {from} from 'rxjs'

@Component({
  selector: 'app-merge-map-take-filter',
  templateUrl: './merge-map-take-filter.component.html',
  styleUrls: ['./merge-map-take-filter.component.sass']
})
export class MergeMapTakeFilterComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    // Öncelikle userId ve id lerin gelmemesi için map ile ham veriyi işleyeceğiz. 
    // “Map” operatörü bir observable nesneyi dönüştürmek amacıyla kullanılır
    //  ancak bize gelen verinin bir yığın olduğunu düşündüğümüzde (any[] tipinde bir veri bekliyoruz)
    //   map operatörü işimize yaramıyor.
    // Mergemap ile gelen akışları birleştirerek tek bir observable nesne elde edip onu değişikliğe uğratıyoruz
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      mergeMap((val)=>from(val)),
      map((val)=>'Title :'+val.title+'\n'+'Body:'+val.body),
      filter((val)=>val.includes('dolorem')),
      take(10)
    )
    .subscribe((data)=>{
      console.log(data)
    })
  }

}

