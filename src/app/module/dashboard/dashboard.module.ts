import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainers } from './container';
import { DashboardComponents } from './component';
import { DashboardContainerComponent } from './container/dashboard-container/dashboard-container.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/lib/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardContainerComponent,
    children: [
      { path: '', component: DashboardComponent }
    ]
  }
];
@NgModule({
  declarations: [...DashboardContainers, ...DashboardComponents],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule {}
