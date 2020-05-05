import { Component, OnInit } from '@angular/core';
import { PollsService, Poll } from 'src/app/user/polls/polls.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {

  allPolls: Poll[]

  constructor(
    private pollsService: PollsService,
    private notification: MatSnackBar
  ) { }

  ngOnInit() {
    this.getAllPolls();
  }

  private getAllPolls() {
    this.pollsService.getAllPolls().subscribe(res => {
      this.allPolls = res;
    });
  }

  stop(pollId: string) {
    this.pollsService.stopPoll(pollId).subscribe(res => {
      this.notification.open('Sėkmingai sustabdyta', undefined, {duration: 3000});
      this.getAllPolls();
    }, err => {
      this.notification.open('Įvyko klaida', undefined, {duration: 3000});
    })
  }

}
