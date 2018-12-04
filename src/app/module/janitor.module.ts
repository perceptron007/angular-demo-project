import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'checkIn',
    loadChildren: './janitor-checkIn/janitor-check-in.module#JanitorCheckInModule'
  },
  {
    path: 'register',
    loadChildren: './janitor-register/janitor-register.module#JanitorRegisterModule'
  },
  {
    path: 'penalty',
    loadChildren: './penalty/penalty.module.ts#PenaltyModule'
  },
  {
    path: 'train',
    loadChildren: ''
  }
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class JanitorModule {}
