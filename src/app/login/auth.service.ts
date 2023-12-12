// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { LoginRequest } from './loginrequest';
// import { LoginResult } from './loginresult';
// import { Observable, Subject, tap } from 'rxjs';
// import { Environment }





// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
  
//   key = "comp584.token";

//   private _authStatus = new Subject<boolean>();
//   public authStatus = this._authStatus.asObservable();

//   constructor(protected http: HttpClient) { }

//   init(){
//     if (this.isAuthenticated()){
//       this.setAuthStatus(true);
//     }
//   }

//   getToken(): string | null{
//     return localStorage.getItem(this.key);
//   }

//   isAuthenticated(): boolean{
//     return this.getToken() !=null;
//   }

//   setAuthStatus(isAuthenticated: boolean){
//     this._authStatus.next(isAuthenticated);
//   }
//   login(loginItem: LoginRequest): Observable<LoginResult> {
//     let url = environment.baseUrl + 'api/Admin';

//     return this.http.post<LoginResult>(url, loginItem)
//     .pipe(tap((loginResult : LoginResult)=> {
//       console.log('Hello')
//       console.log(loginResult.token)
//       if (loginResult.success && loginResult.token){
//         localStorage.setItem(this.key, loginResult.token);
//         this.setAuthStatus(true);
//       }

//     }));
//   }

//     logout(){
//       localStorage.removeItem(this.key);
//       this.setAuthStatus(false);
//     }

//   }