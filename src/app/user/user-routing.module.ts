import { PollResultsComponent } from './poll-results/poll-results.component';
import { RequestsComponent } from './requests/requests.component';
import { RequesterGuard } from './requester.guard';
import { AdminGuard } from './admin.guard';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PollsComponent } from './polls/polls.component';
import { UserComponent } from './user.component';
import { PollDetailComponent } from './poll-detail/poll-detail.component';
import { RouteGuardGuard } from './route-guard.guard';
import { AllPollsComponent } from './all-polls/all-polls.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [RouteGuardGuard],
    children: [
      { path: 'polls', component: PollsComponent },
      { path: 'all-polls', component: AllPollsComponent },
      { path: 'results/:id', component: PollResultsComponent},
      { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
      { path: 'requests', component: RequestsComponent, canActivate: [RequesterGuard] },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
