import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared.module';
import { PollsComponent } from './polls/polls.component';
import { AdminRoutingModule } from './admin-routing.module';
import { PollsService } from '../user/polls/polls.service';
import { PollEditComponent } from './poll-edit/poll-edit.component';
import { PollCreateComponent } from './poll-create/poll-create.component';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [AdminComponent, PollsComponent, PollEditComponent, PollCreateComponent ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule
  ],
  providers: [
    PollsService
  ]
})
export class AdminModule { }
