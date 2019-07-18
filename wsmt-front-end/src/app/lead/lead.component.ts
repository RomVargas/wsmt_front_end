import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '@/_services';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {
  reportForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) { 
    // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/']);
    }
  }

  ngOnInit() {
      this.reportForm = this.formBuilder.group({
        projectName: ['', Validators.required],
        clientName: ['', Validators.required],
        status: ['', Validators.required],
        scope: ['', Validators.required],
        schedule: ['', Validators.required],
        resources: ['', Validators.required],
        budget: ['', Validators.required],
        purchaseOrder: ['', Validators.required],
        preparedBy: ['', Validators.required],
        leade4th: ['', Validators.required],
        businessOwner: ['', Validators.required],
        projectSumary: ['', Validators.required],
        taskName: ['', Validators.required],
        targetDate: ['', Validators.required],
        completeness: ['', Validators.required],
        risk: ['', Validators.required],
        mitigationActions: ['', Validators.required],
        notes: ['', Validators.required],
        accomplishments: ['', Validators.required],
        activitiesNextWeek: ['', Validators.required],
        issues: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { 
    return this.reportForm.controls; 
  }

 

  onSubmit(){
 
    this.submitted = true;
    console.log(this.reportForm.value);
     
    // stop here if form is invalid
    
    if (this.reportForm.invalid) {
        return;
    }
    
    this.submitted = true;

     
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.reportForm.value, null, 4));
    console.log('ends');
    this.router.navigate(['/lead']);
    this.reportForm.reset(); 
  }

  

}
