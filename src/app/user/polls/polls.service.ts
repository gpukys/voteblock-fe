import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constants } from 'src/app/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>(`${constants.url}polls`);
  }

  getActivePolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>(`${constants.url}active`);
  }

  getPollById(id: string): Observable<Poll> {
    return this.http.get<Poll>(`${constants.url}${id}`);
  }

  voteForPoll(pollId: string, votedYes: boolean) {
    return this.http.post(`${constants.url}vote`, {pollId, votedYes});
  }

  createPoll(question: string) {
    return this.http.post(`${constants.url}create`, {question});
  }

  stopPoll(pollId: string) {
    return this.http.post(`${constants.url}stop`, {pollId});
  }

}

export interface Poll {
  id: string;
  question: string;
  yes: number;
  no: number;
  running: boolean;
}
