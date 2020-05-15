import { Observable } from 'rxjs';
import { constants } from './constants';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
    ) { }

  url = `${constants.url}`;
  private loggedInUser: UserSubject;
  private jwt: string;

  initSmartIdLogin(personalCode: number): Observable<SmartIdResponse> {
    return this.http.post<SmartIdResponse>(`${this.url}login`, {idCode: personalCode});
  }

  pollSmartIdSession(sessionId: string): Observable<SmartIdPollResponse> {
    return this.http.get<SmartIdPollResponse>(`${this.url}login/${sessionId}`);
  }

  setCredentials(subject: UserSubject, jwt: string) {
    sessionStorage.setItem('firstname', subject.givenName);
    sessionStorage.setItem('lastname', subject.surname);
    sessionStorage.setItem('jwt', jwt);
  }

  getRole(): UserRoles {
    return this.jwtHelper.decodeToken(sessionStorage.getItem('jwt')).role || UserRoles.voter;
  }

  getUserData(): User {
    return {
      firstName: sessionStorage.getItem('firstname'),
      lastName: sessionStorage.getItem('lastname'),
      role: this.getRole()
    };
  }

  isAuthenticated(): boolean {
    const token = sessionStorage.getItem('jwt');
    return token && !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    sessionStorage.removeItem('jwt');
    sessionStorage.removeItem('firstname');
    sessionStorage.removeItem('lastname');
  }
}

export enum UserRoles {
  voter = 'VOTER',
  admin = 'ADMINISTRATOR',
  requester = 'REQUESTER'
}

export interface SmartIdResponse {
  sessionId: string;
  verificationCode: string;
}

export interface SmartIdPollResponse {
  authToken: string;
  state: string;
  subject: UserSubject;
}

export interface UserSubject {
  givenName: string;
  serialNumber: string;
  surname: string;
}

export interface User {
  firstName: string;
  lastName: string;
  role: UserRoles;
}
