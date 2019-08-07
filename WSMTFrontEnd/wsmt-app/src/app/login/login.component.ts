import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { AuthService } from '../services/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Please Sign In!';
  user: User;

  constructor(private authService: AuthService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      Swal.fire('Login', `Hello ${this.authService.user.username} already authenticated!`, 'info');
      this.router.navigate(['home']);
    }
  }

  login(): void {
    //this.router.navigate(['home']);
    console.log(this.user);
    if (this.user.username == null || this.user.password == null) {
      Swal.fire('Error Login', 'Username or password empty!', 'error');
      return;
    }

    this.authService.login(this.user).subscribe(response => {
      console.log(response);

      this.authService.saveUser(response.access_token);
      this.authService.saveToken(response.access_token);
      let user= this.authService.user;
      console.log(user);
      console.log(this.user);
      if(user.roles[0]=='ROLE_ADMIN'){
        this.router.navigate(['home']);
        Swal.fire('Login', `Hello ${this.user.username}, Login Success!`, 'success');
      }
      if(user.roles[0]=='ROLE_LEAD'){
        this.router.navigate(['lead']);
        Swal.fire('Login', `Hello ${this.user.username}, Login Success!`, 'success');
      }
      if(user.roles[0]=='ROLE_MANAGER'){
        this.router.navigate(['manager']);
        Swal.fire('Login', `Hello ${this.user.username}, Login Success!`, 'success');
      }
    }, err => {
      if (err.status == 400) {
        Swal.fire('Error Login', 'wrong user or password!', 'error');
      }
    }
    );
  }

}
