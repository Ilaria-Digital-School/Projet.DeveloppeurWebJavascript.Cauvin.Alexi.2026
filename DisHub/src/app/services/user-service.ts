import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  //Destination /Adresse
  userURL: string = 'http://localhost:4200'

  //Livreur
  private httpClient = inject(HttpClient)

  getAllUsers(){
    return this.httpClient.get(this.userURL);
  }

  addUser(userObj:any){
    return this.httpClient.post(this.userURL, userObj);
  }

  //Get avec Json-server
  login(loginData:{email:string, pwd:string}):Observable<any>
  {
  return this.httpClient.get<any[]>(`${this.userURL}?email=${loginData.email}&pwd=${loginData.pwd}`)
  }

  //login avec vrai DB  et backend
  // loginUser(loginData:{email:string, pwd:string}):Observable<any>
  // {
  //   return this.httpClient.post(this.userURL + "/login" , loginData);
  // }

  deleteUserById(id:any){
    return this.httpClient.delete(this.userURL + "/" + id);
  }

  updateUser(userObj:any){
    return this.httpClient.put(this.userURL + "/" + userObj.id, userObj);
  }
}