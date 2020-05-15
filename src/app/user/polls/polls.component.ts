import { Component, OnInit } from '@angular/core';
import { PollsService, Poll, PollStatus } from './polls.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {

  activePolls: Poll[];
  selectedPoll: Poll;

  loading = false;

  constructor(
    private pollsService: PollsService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.pollsService.getActivePolls().subscribe(res => {
      this.activePolls = res;
      this.loading = false;
    }, err => {
      this.loading = false;
    });
  }

}
