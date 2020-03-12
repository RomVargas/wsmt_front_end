import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;

  users: User[];

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      users => this.users = users
    );

  }

}
