import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  onLoginSubmit(userobj:any){
    return this.http.post('https://localhost:7152/api/Contact',userobj)
  }
}
