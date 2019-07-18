import { Component, OnInit } from '@angular/core';
import { User } from './../models/user';
import { UserService, AuthenticationService } from './../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
