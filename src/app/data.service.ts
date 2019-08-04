import { Injectable } from '@angular/core';
import { users } from './users';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private USER: any;
  private usersList = users;
  private id: number;
  private formDataList: any;
  setSelectedUserData(user: any) {
    this.USER = user;
  }
  getSelectedUserData(): any {
    return this.USER;
  }
  setUserId(index) {
    this.id = index;
  }
  getUserId(): number {
    return this.id;
  }
  setFormData(formData) {
    console.log(this.id);
    debugger;
    this.usersList = this.getStoredData();
    // this.formDataList = formData;
    if (formData) {
      this.usersList[this.id] = formData;
      localStorage.setItem('userData', JSON.stringify(this.usersList));
    } else {
      localStorage.setItem('userData', JSON.stringify(this.usersList));
    }
  }
  getStoredData(): any {
    return JSON.parse(localStorage.getItem('userData'));
  }
  getUserList(): any {
    return this.usersList;
  }
  constructor() { }
}
