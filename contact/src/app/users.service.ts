import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsers } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _url: string = "http://localhost:5555/users";

  constructor(private http: HttpClient) { }

  fetchContacts(): Observable<IUsers[]>{
    return this.http.get<IUsers[]>(this._url)
  }

  deleteContacts(id: number) {
    return this.http.delete(this._url + '/' + id);
  }

}
