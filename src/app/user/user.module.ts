import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared.module';
import { PollsComponent } from './polls/polls.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { PollsService } from './polls/polls.service';
import { PollDetailComponent } from './poll-detail/poll-detail.component';
import { AllPollsComponent } from './all-polls/all-polls.component';
import { AdminComponent } from './admin/admin.component';
import { RequestsComponent } from './requests/requests.component';
import { PollResultsComponent } from './poll-results/poll-results.component';
import { AllRequestsComponent } from './all-requests/all-requests.component';



@NgModule({
  declarations: [PollsComponent, UserComponent, PollDetailComponent, AllPollsComponent, AdminComponent, RequestsComponent, PollResultsComponent, AllRequestsComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule
  ],
  providers: [
    PollsService
  ]
})
export class UserModule { }
