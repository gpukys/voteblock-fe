import { Component, OnInit } from '@angular/core';
import { PollsService, Poll } from './polls.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {

  activePolls: Poll[];

  constructor(
    private pollsService: PollsService
  ) { }

  ngOnInit() {
    this.pollsService.getActivePolls().subscribe(res => {
      this.activePolls = res;
    });
  }

}
