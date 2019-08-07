import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


import { User } from '../models/user';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {

    private apiUrl: string = 'http://localhost:8080';
    private httpHeaders = new HttpHeaders({'ContenType':'application/json'});

    constructor(
      private http: HttpClient,
      private router: Router
    ) { }

    private isNonAuThorized(error): boolean{
      // 401 unauthorized
      // 403 forbiden
      if(error.status==401 || error.status==403){
        this.router.navigate(['/login']);
        return true;
      }
      return false;
    }

    getAll() {
        return this.http.get<User[]>(this.apiUrl + `/user/allusers`);
    }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl + `/user/allusers`);
    }

    registerUser(user: User): Observable<User> {
        return this.http.post<User>(this.apiUrl + '/user/register', user,{headers: this.httpHeaders});
    }

    getUserById(id: number): Observable<User>{
        return this.http.get<User>(this.apiUrl + `/user/${id}`);
    }

    getById(id: number) {
        return this.http.get(this.apiUrl + `/user/${id}`);
    }

    register(user: User) {
        return this.http.post(this.apiUrl + `/user/register`, user)
        .pipe(
          map((response: any) => response.user as User),
          catchError(e => {
            if(this.isNonAuThorized(e)){
              return throwError(e);
            }
            console.log(e.error);
            return throwError(e);
          })
        );
    }

    update(user: User) {
        return this.http.put(this.apiUrl + `/user/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(this.apiUrl + `/users/${id}`);
    }
}
