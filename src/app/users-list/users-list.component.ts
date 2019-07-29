import { Component, OnInit } from '@angular/core';
import { users } from '../users';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users = users;
  selectedUser: any = {};
  editUser(user: any): void {
    this.selectedUser = user;
    console.log(this.selectedUser);
    this.dataService.setuserData(this.selectedUser);
    this.router.navigateByUrl('edit');
  }
  constructor(private router: Router, private dataService: DataService ) {

  }

  ngOnInit() {
  }

}
