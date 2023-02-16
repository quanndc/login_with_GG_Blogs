import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { New } from '../Models/new.model';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private http: HttpClient) {}

  url = 'https://social.runwayclub.dev/api/articles/latest';
  get(){
    return this.http.get(this.url).pipe(map((data: any) => {
      return <New[]>data;
    }))
  }
}