import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PollsComponent } from './polls/polls.component';
import { AdminComponent } from './admin.component';
import { PollCreateComponent } from './poll-create/poll-create.component';
import { PollEditComponent } from './poll-edit/poll-edit.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'polls', component: PollsComponent },
      { path: 'polls/create', component: PollCreateComponent },
      { path: 'polls/edit/:id', component: PollEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
