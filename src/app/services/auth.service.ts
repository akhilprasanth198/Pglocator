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
  setPgid(id: number): void {
    this.pgid = id;
  }

  // Get the PG owner ID
  getPgid(): number | null {
    return this.pgid;
  }

  // Clear the user ID (for logout)
  clearUser(): void {
    this.userId = null;
    this.pgid = null;
  }
}