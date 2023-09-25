import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any>{
    return this.http.get('https://dummyapi.io/data/v1/user?created=1')
  }
  getUserById(item: any): Observable<any>{
    return this.http.get('https://dummyapi.io/data/v1/user/' + item)
  }
  updateUser(item: any): Observable<any>{
    return this.http.put('https://dummyapi.io/data/v1/user/' + item.id, item )
  }
}
