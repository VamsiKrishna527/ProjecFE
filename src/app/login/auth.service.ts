// import { Injectable } from '@angular/core';
// import { LoginRequest } from './loginrequest';
// import { environment } from 'src/environments/environment.development';
// import { Observable, tap } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { LoginResult} from './loginresult';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   key = "comp584-token";

//   constructor(protected http: HttpClient) { }

//   getToken(): string | null{
//     return localStorage.getItem("comp584-token");
//   }

//   isAuthenicated(): boolean {
//     return this.getToken() != null;
//   }

//   login(loginItem: LoginRequest) : Observable<LoginResult>{
//     let url = environment.baseUrl + 'api/Admin'

//     return this.http.post<LoginResult>(url, loginItem)
//       .pipe(tap((loginResult: LoginResult) => {
//         if(loginResult.success && loginResult.token){
//           localStorage.setItem("comp584-token", loginResult.token)
//         }
//       }));
//   }

// }