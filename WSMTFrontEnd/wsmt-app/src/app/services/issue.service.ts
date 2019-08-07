import { Issue } from './../models/issue';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Report } from '../models/report';

@Injectable({ providedIn: 'root' })
export class IssueService {

  constructor(private http: HttpClient) { }

  getIssuesByIdReport(): Observable<Issue> {
      return null;
  }
}
