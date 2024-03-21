import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  generateToken(): boolean {
    if (typeof localStorage !== 'undefined') { 
      return !!localStorage.getItem("token");
    }
    return false;
  }

}
