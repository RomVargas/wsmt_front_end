import { Activity } from './../models/activity';
import { Accomplishment } from './../models/accomplishment';
import { Component, OnInit, Input } from '@angular/core';
import { Report } from '../models/report';
import { Issue } from '../models/issue';
import { ReportService } from '../services/report.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {

  private report : Report = new Report();
  constructor(
    private reportService: ReportService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    /*this.reportService.getReportById(27).subscribe(
      report => this.report = report
    );*/
    this.loadReport();
  }

  loadReport(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.reportService.getReportById(id).subscribe(
          (report) => this.report = report
        )
      }
    })
  }

}
