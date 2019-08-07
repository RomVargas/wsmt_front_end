import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';

@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;


    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        /*if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }*/
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            lastName: ['', Validators.required],
            userName: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            idRole: ['', Validators.required],
            email: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.registerForm.addControl('status', new FormControl('', Validators.required));
        this.registerForm.controls['status'].setValue(1);

        this.userService.registerUser(this.registerForm.value)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    Swal.fire('Login', `User has been created`, 'success');
                    this.router.navigate(['/home']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}

