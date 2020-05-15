import { MatSnackBar } from '@angular/material';
import { PollsService, Poll } from 'src/app/user/polls/polls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  activePolls: Poll[];
  requests: [];
  selectedPoll: Poll;

  loadingPolls = false;
  loadingRequests = false;

  constructor(
    private pollsService: PollsService,
    private notification: MatSnackBar
  ) { }

  ngOnInit() {
    this.getActivePolls();
    this.getRequests();
  }

  validatePoll(pollId: string) {
    this.pollsService.validatePollChain(pollId).subscribe(res => {
      console.log(res);
    }, err => {
      this.notification.open('Blokų grandinė nevalidi!', undefined, {duration: 3000});
    });
  }

  stopPoll(pollId: string) {
    this.pollsService.stopPoll(pollId).subscribe(res => {
      this.notification.open('Balsavimas sustabdytas', undefined, {duration: 3000});
      this.getActivePolls();
    }, err => {
      this.notification.open('Įvyko klaida', undefined, {duration: 3000});
    });
  }

  approveRequest(requestId: string) {
    this.pollsService.approveRequest(requestId).subscribe(res => {
      this.notification.open('Užklausa sėkmingai patvirtinta', undefined, {duration: 3000});
      this.getActivePolls();
      this.getRequests();
    }, err => {
      this.notification.open('Įvyko klaida', undefined, {duration: 3000});
    });
  }

  rejectRequest(requestId: string) {
    this.pollsService.rejectRequest(requestId).subscribe(res => {
      this.notification.open('Užklausa sėkmingai atmesta', undefined, {duration: 3000});
      this.getRequests();
    }, err => {
      this.notification.open('Įvyko klaida', undefined, {duration: 3000});
    });
  }

  private getActivePolls() {
    this.loadingPolls = true;
    this.pollsService.getActivePolls().subscribe(res => {
      this.activePolls = res;
      this.loadingPolls = false;
    }, err => {
      this.loadingPolls = false;
    });
  }

  private getRequests() {
    this.pollsService.getPollRequests().subscribe(res => {
      this.requests = <any>res;
      console.log(res);
    });
  }

}
