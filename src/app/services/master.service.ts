import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserToken } from '../models/UserToken';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiRegUrl: string = "http://localhost:8085/user/newUser";
  authenticateUrl: string = "http://localhost:8085/user/authenticate";
  http=inject(HttpClient);
 // constructor() { }
  registerNewUser(registerData: any): Observable<string> {
   
    return this.http.post<string>(this.apiRegUrl, registerData, { responseType: 'text' as 'json' });
  }

  authenticateUser(loginData: any): Observable<IUserToken> {
   
    return this.http.post<IUserToken>(this.authenticateUrl, loginData);
  }
}
