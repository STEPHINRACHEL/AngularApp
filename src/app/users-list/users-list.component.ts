import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'FirstName', 'LastName', 'email', 'age'];
  // users = this.dataService.getFormData();
  dataSource = this.dataService.getFormData();
  selectedUser: any = {};
  id: number;
  editUser(user: any, id: number): void {
    this.selectedUser = user;
    this.id = id;
    this.dataService.setSelectedUserData(this.selectedUser);
    this.dataService.setUserId(this.id);
    this.router.navigateByUrl('edit');
  }
  constructor(private router: Router, private dataService: DataService ) {
  }
  ngOnInit() {
  }

}
