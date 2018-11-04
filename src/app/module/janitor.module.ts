import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { DashboardContainerComponent } from './dashboard/container/dashboard-container/dashboard-container.component';

const routes : Routes = [
  { path: '', component: DashboardContainerComponent
  }
];


@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  exports: [],
  providers: [],
})
export class JanitorModule {}
