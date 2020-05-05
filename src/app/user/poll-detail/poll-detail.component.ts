import { Component, OnInit } from '@angular/core';
import { Poll, PollsService } from '../polls/polls.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.scss']
})
export class PollDetailComponent implements OnInit {

  poll: Poll;

  constructor(
    private pollsService: PollsService,
    private route: ActivatedRoute,
    private router: Router,
    private notification: MatSnackBar
  ) {
    this.route.paramMap.subscribe(res => {
      this.pollsService.getPollById(res.get('id')).subscribe(poll => {
        this.poll = poll;
      });
    });
  }

  ngOnInit() {
  }

  vote(votedTrue: boolean) {
    this.pollsService.voteForPoll(this.poll.id, votedTrue).subscribe(res => {
      this.router.navigate(['user/polls']);
      this.notification.open('Sėkmingai prabalsuota', undefined, {duration: 3000});
    }, err => {
      this.notification.open('Įvyko klaida', undefined, {duration: 3000});
    });
  }

}
