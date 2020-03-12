import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';

import { AlertService } from '../services/alert.service';
import { ReportService } from '../services/report.service';
import { Report } from '../models/report';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {
  public form: FormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public report: Report = new Report();


  constructor(
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public router: Router,
    public alertService: AlertService,
    public reportService: ReportService
  ) {
    // redirect to home if already logged in
      /*if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
    }*/
  }

  ngOnInit() {
      this.form = this.formBuilder.group({
        projectName: ['', Validators.required],
        clientName: ['', Validators.required],
        status: ['', Validators.required],
        scope: ['', Validators.required],
        schedule: ['', Validators.required],
        resources: ['', Validators.required],
        budget: ['', Validators.required],
        purchaseOrder: ['', Validators.required],
        preparedBy: ['', Validators.required],
        lead4th: ['', Validators.required],
        numResources:['', Validators.required],
        businessOwner: ['', Validators.required],
        projectSummary: ['',[Validators.required, Validators.maxLength(255)]],
        taskName: ['', Validators.required],
        taskNumber: ['', Validators.required],
        targetDate: ['', Validators.required],
        completeness: ['', Validators.required],
        risk: ['', Validators.required],
        mitigationActions: ['', Validators.required],
        notes: ['', Validators.required],
        accomplishments: this.formBuilder.array([this.createAccomplishment()]),
        activities: this.formBuilder.array([this.createActivity()]),
        issues: this.formBuilder.array([this.createIssue()])
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }
  createItem() {
    return this.formBuilder.group({
      dashFldName: 0,
      dataFldName: ''
    })
  }

  onSubmit() {

    this.submitted = true;

    this.form.addControl('idUser', new FormControl('', Validators.required));
    this.form.addControl('idProject', new FormControl('', Validators.required));

    this.form.controls['idUser'].setValue(1);
    this.form.controls['idProject'].setValue(1);

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.submitted = true;
    console.log(this.form.value);
    this.reportService.save(this.form.value)
          .subscribe(
            response => {
              this.report = response;
              this.router.navigate(['/report-detail/'+ this.report.idReport]);
              Swal.fire('Saved', 'Your Report has been saved', 'success');
              this.form.reset();
            },
            error => {
              this.alertService.error(error);
              this.loading = false;
            }

    );
  }

  /** Methods for push on List**/
  addNextItem(item: string) {
    if (item === 'issue'){
      (this.form.controls['issues'] as FormArray).push(this.createIssue());
    }
    if (item === 'activity' ){
      (this.form.controls['activities'] as FormArray).push(this.createActivity());
    }
    if (item === 'accomplishment'){
      (this.form.controls['accomplishments'] as FormArray).push(this.createAccomplishment());
    }
  }

  //Method for create List of Issues
  createIssue() {
    return this.formBuilder.group({
      issues: ''
    });
  }

  createActivity() {
    return this.formBuilder.group({
      activities: ''
    });
  }

  createAccomplishment(){
    return this.formBuilder.group({
      accomplishments: ''
    });
  }

  //this method retun an array for delete an index
  get formArrIssue() {
    return this.form.get('issues') as FormArray;
  }

  get formArrActivity() {
    return this.form.get('activities') as FormArray;
  }

  get formArrAccomplishment() {
    return this.form.get('accomplishments') as FormArray;
  }

  // Method to delete from List
  removeIssue(index: number) {
    this.formArrIssue.removeAt(index);
  }

  removeActivity(index: number) {
    this.formArrActivity.removeAt(index);
  }

  removeAccomplishment(index: number) {
    this.formArrAccomplishment.removeAt(index);
  }

}
