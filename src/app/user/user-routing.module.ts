import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PollsComponent } from './polls/polls.component';
import { UserComponent } from './user.component';
import { PollDetailComponent } from './poll-detail/poll-detail.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'polls', component: PollsComponent },
      { path: 'polls/vote/:id', component: PollDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
