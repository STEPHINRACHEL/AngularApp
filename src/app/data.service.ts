import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private USER: any;
  setuserData(user: any) {
    this.USER = user;
  }
  getuserData(): any {
    return this.USER;
  }
  constructor() { }
}
