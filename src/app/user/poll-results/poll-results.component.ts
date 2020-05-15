import { PollsService } from 'src/app/user/polls/polls.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll-results',
  templateUrl: './poll-results.component.html',
  styleUrls: ['./poll-results.component.scss']
})
export class PollResultsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private pollsService: PollsService
  ) { }

  blockchain;
  results;

  ngOnInit() {
    this.route.paramMap.subscribe(res => {
      this.pollsService.getPollResultsRaw(res.get('id')).subscribe(res => {
        this.blockchain = res;
      });
      this.pollsService.getPollResults(res.get('id')).subscribe(res => {
        this.results = res;
      });
    });
  }

}
