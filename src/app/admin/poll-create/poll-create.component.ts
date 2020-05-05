import { Component, OnInit } from '@angular/core';
import { PollsService } from 'src/app/user/polls/polls.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-poll-create',
  templateUrl: './poll-create.component.html',
  styleUrls: ['./poll-create.component.scss']
})
export class PollCreateComponent implements OnInit {

  question;

  constructor(
    private pollsService: PollsService,
    private router: Router,
    private notification: MatSnackBar
  ) { }



  ngOnInit() {
  }

  createPoll() {
    this.pollsService.createPoll(this.question).subscribe(res => {
      this.router.navigate(['admin/polls']);
      this.notification.open('Balsavimas sukurtas', undefined, {duration: 3000});
    }, err => {
      this.notification.open('Įvyko klaida', undefined, {duration: 3000});
    })
  }

}
