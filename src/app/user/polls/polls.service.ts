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
    return this.http.get<Poll[]>(`${constants.url}polls/status/STARTED`);
  }

  getPollById(id: string): Observable<Poll> {
    return this.http.get<Poll>(`${constants.url}${id}`);
  }

  voteForPoll(pollId: string, choiceId: string) {
    return this.http.post(`${constants.url}polls/vote`, {pollId, choiceId});
  }

  createPoll(question: string) {
    return this.http.post(`${constants.url}create`, {question});
  }

  stopPoll(pollId: string) {
    return this.http.post(`${constants.url}polls/stop`, {pollId});
  }

  validatePollChain(pollId: string) {
    return this.http.post(`${constants.url}chain/user/${pollId}`, {});
  }

  getPollResultsRaw(pollId: string) {
    return this.http.get(`${constants.url}polls/${pollId}/raw`);
  }

  getPollResults(pollId: string) {
    return this.http.get(`${constants.url}polls/${pollId}/results`);
  }

  submitPollRequest(request: {name: string, choices: string[]}) {
    return this.http.post(`${constants.url}requests/create`, request);
  }

  getPollRequests() {
    return this.http.get(`${constants.url}requests/PENDING`);
  }

  getAllPollRequests() {
    return this.http.get(`${constants.url}users/52c2d2ee-f15f-46e1-befa-96a2c27e565a/requests`);
  }

  approveRequest(requestId: string) {
    return this.http.post(`${constants.url}requests/approve`, {requestId});
  }

  rejectRequest(requestId: string) {
    return this.http.post(`${constants.url}requests/reject`, {requestId});
  }

}

export interface Poll {
  id: string;
  name: string;
  requesterId: string;
  status: PollStatus;
  choices: PollChoices[];
}

export enum PollStatus {
  notStarted = 'NOT_STARTED',
  started = 'STARTED',
  stopped = 'STOPPED'
}

export interface PollChoices {
  body: string;
  id: string;
  pollId: string;
}
