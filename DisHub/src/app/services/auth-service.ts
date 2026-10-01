import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  

  getConnectedUser(){
    const user = JSON.parse(localStorage.getItem('connectUser') || 'null');
    return user;
  }

  isAdmin(){
    return this.getConnectedUser()?.role === "admin";
  }

}