import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  {
    path: '',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }
];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class JanitorModule {}
