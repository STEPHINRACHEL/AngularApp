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
  setFormData(formData) { //store edited data in local storage
    console.log(this.id);
    this.usersList = this.getStoredData();
    if (formData) {
      this.usersList[this.id] = formData;
      localStorage.setItem('userData', JSON.stringify(this.usersList));
    } else {
      localStorage.setItem('userData', JSON.stringify(this.usersList));
    }
  }
  getStoredData(): any { //fetch data stored in local storage
    return JSON.parse(localStorage.getItem('userData'));
  }
  constructor() { }
}
