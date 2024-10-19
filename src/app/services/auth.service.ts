import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userId: number | null = null;
  private pgid: number | null = null;

  constructor() {
    // Initialize userId from localStorage (if it exists)
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      this.userId = parseInt(storedUserId, 10);
    }
  }
    
  setUserId(id: number): void {
    this.userId = id;
    localStorage.setItem('userId', id.toString()); // Store userId in localStorage
  }
   // Get the current user ID (returns null if not logged in)
  getUserId(): number | null {
    return this.userId;  // No need to check localStorage here anymore, as we store userId in the constructor
  }

  login(userId: number): void {
    this.setUserId(userId);
  }


  setPgid(id: number): void {
    this.pgid = id;
    localStorage.setItem('pgid', id.toString());  // Optionally store PG ID in localStorage
  }
  // Get the PG owner ID
  getPgid(): number | null {
    return this.pgid;
  }

  // Clear the user ID (for logout)
  clearUser(): void {
    this.userId = null;
    this.pgid = null;
    localStorage.removeItem('userId');  
    localStorage.removeItem('pgid');    
  }
  isLoggedIn(): boolean {
    return this.userId !== null;
  }

  llogout(): void {
    this.clearUser();
  }

}