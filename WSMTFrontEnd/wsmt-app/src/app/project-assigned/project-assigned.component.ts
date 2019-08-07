import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service'; 
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-assigned',
  templateUrl: './project-assigned.component.html',
  styleUrls: ['./project-assigned.component.css']
})
export class ProjectAssignedComponent implements OnInit {

  /*user: User = 
    {
      id: 1, 
      username: "user", 
      password:"", 
      firstName:"jhon",
      lastName:"Doe", 
      userName:"jdoe",
      role:"admin",
      email:"test@test.com",
      token:"123"
    };*/
  private user: User = new User();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  loadUser(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.userService.getUserById(id).subscribe(
          (user) => this.user = user
        )
      }
    })
  }

}