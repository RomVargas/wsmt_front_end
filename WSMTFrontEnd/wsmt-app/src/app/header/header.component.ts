import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from './../services/authService';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Weekly Status Management Tool';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    let user = this.authService.user
    console.log(user);
  }

  logout(): void {
    let username = this.authService.user.username;
    this.authService.logout();
    Swal.fire('Logout', `Hello ${username}, your session has been successfuly closed!`, 'success');
    this.router.navigate(['/login']);
  }

}
