import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  {
    path: '',
    component: FrontPageComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'about',  component: AboutComponent },
      { path: 'clients',  component: ClientsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontPageRoutingModule { }
