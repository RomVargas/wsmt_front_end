import { Component, OnInit } from '@angular/core';
import { Report } from '../models/report';
import { Subscription } from 'rxjs';
import { ReportService } from '../services/report.service';
import { AuthService } from '../services/authService';
import { User } from '../models';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  report: Report;
  reportSubscription: Subscription;
  reports: Report[] = [];
  user: User;
  constructor(public reportService: ReportService, public authService: AuthService) {

  }

  ngOnInit() {
    this.reportService.getAllReports().subscribe(
      reports => this.reports = reports
    );
  }

}
