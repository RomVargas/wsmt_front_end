import { Activity } from './../models/activity';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Report } from '../models/report';

@Injectable({ providedIn: 'root' })
export class ActivityService {

  constructor(private http: HttpClient) { }

    getAccomplishmentByIdReport(): Observable<Activity> {
      return null;
  }
}
