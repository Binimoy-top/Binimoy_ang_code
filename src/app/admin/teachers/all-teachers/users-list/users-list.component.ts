import { Component, OnInit } from '@angular/core';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {

  constructor(public UserService: TeachersService) { }

  ngOnInit(): void {
    this.UserService.LoadusersList();
  }

}
