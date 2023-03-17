import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  public userName: any;
  constructor() { }

  public getUserName() {
    return this.userName;
  }
}
