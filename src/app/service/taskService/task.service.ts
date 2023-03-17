import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient) {
  }
  user:any;
  addTask(data: any): Observable<any> {
    return this._http.post("http://localhost:8080/task/save", data)
  }

  getTask(): Observable<any> {
    return this._http.get(`http://localhost:8080/task/getAll`)
  }
  deleteTask(id: number): Observable<any> {
    return this._http.delete(`http://localhost:8080/task/delete?id=${id}`)
  }
}
