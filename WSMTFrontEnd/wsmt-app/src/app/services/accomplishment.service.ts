import { Accomplishment } from './../models/accomplishment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Report } from '../models/report';

@Injectable({ providedIn: 'root' })
export class AccomplishmentService {

  constructor(private http: HttpClient) { }

    getAccomplishmentByIdReport(): Observable<Accomplishment> {
      return null;
  }
}
