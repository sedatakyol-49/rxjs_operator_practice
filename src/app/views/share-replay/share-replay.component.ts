import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { share, shareReplay } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.sass']
})
export class ShareReplayComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {

    //share && shareReplay---->>>> eger nir kaynaga birden fazla observer bagli ise ,
    // share && shareReplay sayesinde sadece bir tane http-request yapilip var olan observer'lara yayin yapilir.
    const ob$=this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1').pipe(share());

    ob$.subscribe(d=>console.log(d))

    ob$.subscribe(d=>console.log(d))
  }

}
