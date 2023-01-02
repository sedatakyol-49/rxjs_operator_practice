import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient:HttpClient) { }

  getBooks(value:string):Observable<any>{
    return this.httpClient.get(`https://www.googleapis.com/books/v1/volumes?q=${value}`)
    .pipe(
      map((d:any)=>d.items)
    )
  }
}
