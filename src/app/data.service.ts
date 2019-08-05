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
  getUsers(): any{
    return this.usersList;
  }
  //store data in local storage
  setFormData(formData) {
    debugger;
    console.log(this.id);
    this.usersList = this.getStoredData();
    if (formData) {
      formData.position = this.id + 1;
      this.usersList[this.id] = formData;
      localStorage.setItem('userData', JSON.stringify(this.usersList));
    } else {
      localStorage.setItem('userData', JSON.stringify(this.usersList));
    }
  }
  //fetch data from local storage
  getStoredData(): any {
    return JSON.parse(localStorage.getItem('userData'));
  }
  constructor() { }
}
