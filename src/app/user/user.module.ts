import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared.module';
import { PollsComponent } from './polls/polls.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { PollsService } from './polls/polls.service';
import { PollDetailComponent } from './poll-detail/poll-detail.component';



@NgModule({
  declarations: [PollsComponent, UserComponent, PollDetailComponent],
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
