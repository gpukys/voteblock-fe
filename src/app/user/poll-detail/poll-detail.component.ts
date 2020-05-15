import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Poll, PollsService } from '../polls/polls.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.scss']
})
export class PollDetailComponent implements OnInit {

  @Input() poll: Poll;
  @Output() voteFinished = new EventEmitter();

  selectedChoice;

  constructor(
    private pollsService: PollsService,
    private notification: MatSnackBar
  ) {
  }

  ngOnInit() {
  }

  vote() {
    this.pollsService.voteForPoll(this.poll.id, this.selectedChoice).subscribe(res => {
      this.voteFinished.emit();
      this.notification.open('Balsas sėkmingai užregistruotas', undefined, {duration: 3000});
    }, err => {
      this.notification.open('Įvyko klaida', undefined, {duration: 3000});
    });
  }

}
