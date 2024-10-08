import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private userId:number |null=null;
 private pgid:number|null=null;
  constructor() { }
  setUserId(id:number){
    this.userId=id;
  }
  getUserId():number |null{
    return this.userId;
  }
  getPgid():number|null{
    return this.pgid;
  }
  clearUser(){
    this.userId=null;
  }
}
