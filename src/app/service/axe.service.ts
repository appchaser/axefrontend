import { Injectable } from '@angular/core';
import { Axe } from './axe.model';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { ResponseFile } from './ResponseFile';
const baseUrl = 'http://localhost:8084';
@Injectable({
  providedIn: 'root'
})
export class AxeService {

  constructor(private http:HttpClient) { }

create(data :any):Observable<any>{
  return this.http.post(baseUrl + '/upload',data);
}

getAllfiles(): Observable<Axe[]>{
  return this.http.get<Axe[]>(baseUrl + '/files');
}

getAllfilesStream(): Observable<ResponseFile[]>{
  return this.http.get<ResponseFile[]>(baseUrl + '/filesStream');
}

}
