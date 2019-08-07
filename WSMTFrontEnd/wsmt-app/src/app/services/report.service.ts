import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Report } from '../models/report';

@Injectable({ providedIn: 'root' })
export class ReportService {

  private apiUrl: string = 'http://localhost:8080';
  private httpHeaders = new HttpHeaders({'ContenType':'application/json'});

  constructor(private http: HttpClient) {}

    saveReport(reportForm: Report) {
        return this.http.post(this.apiUrl + '/report/save', reportForm);
    }

    save(report: Report): Observable<Report>{
      return this.http.post(this.apiUrl + '/report/save', report).pipe(
        map(response => response as Report)
      );
    }

    getReportById(id: number): Observable<Report> {
      return this.http.get(this.apiUrl + `/report/${id}`).pipe(
        map(response => response as Report)
      );
    }

    getReportsForManager(id: number) {
      return this.http.get(this.apiUrl + `/report/manager/${id}`);
    }

    // Method observable without a map
    getAllReports(): Observable<Report[]> {
      return this.http.get<Report[]>(this.apiUrl + `/report/allreports`);
    }

    // Method observable with map
    getAllReport(): Observable<Report[]> {
      return this.http.get(this.apiUrl + `/report/get-reports`).pipe(
        map(response => response as Report[])
      );
    }
}
