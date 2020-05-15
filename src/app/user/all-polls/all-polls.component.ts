import { PollStatus } from './../polls/polls.service';
import { Poll, PollsService } from 'src/app/user/polls/polls.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-polls',
  templateUrl: './all-polls.component.html',
  styleUrls: ['./all-polls.component.scss']
})
export class AllPollsComponent implements OnInit {

  activePolls: Poll[];
  selectedPoll: Poll;

  loading = false;

  constructor(
    private pollsService: PollsService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.pollsService.getAllPolls().subscribe(res => {
      this.activePolls = res;
      this.loading = false;
    }, err => {
      this.loading = false;
    });
  }

  allowVote(status: PollStatus) {
    return status === PollStatus.started;
  }

}
