import { Component, OnInit } from '@angular/core';
import { PollsService } from '../polls/polls.service';

@Component({
  selector: 'app-all-requests',
  templateUrl: './all-requests.component.html',
  styleUrls: ['./all-requests.component.scss']
})
export class AllRequestsComponent implements OnInit {

  requests = [];
  requestStatus = {
    ['PENDING']: {text: 'Laukiama', class: 'waiting'},
    ['APPROVED']: {text: 'Patvirtinta', class: 'accept'},
    ['REJECTED']: {text: 'Atmesta', class: 'warn'},
  };

  constructor(
    private pollsService: PollsService
  ) { }

  ngOnInit() {
    this.getRequests();
  }

  private getRequests() {
    this.pollsService.getAllPollRequests().subscribe(res => {
      this.requests = <any>res;
      console.log(res);
    }, err => {
      this.requests = <any>err.error;
    });
  }

}
