import { Observable } from 'rxjs';
import { constants } from './constants';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
    ) { }

  url = `${constants.url}`

  initSmartIdLogin(personalCode: number): Observable<SmartIdResponse> {
    return this.http.post<SmartIdResponse>(`${this.url}login`, {idCode: personalCode});
  }

  pollSmartIdSession(sessionId: string) {
    return this.http.get(`${this.url}login/${sessionId}`);
  }
}

export interface SmartIdResponse {
  sessionId: string;
  verificationCode: string;
}
