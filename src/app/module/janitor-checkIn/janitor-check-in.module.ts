import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JanitorCheckInComponents } from './component';
import { JanitorCheckInContainers } from './container';
import { JanitorCheckInContainerComponent } from './container/janitor-check-in-container/janitor-check-in-container.component';
import { JanitorRecordsComponent } from './component/janitor-records/janitor-records.component';
import { JanitorCheckInCreateComponent } from './container/janitor-check-in-create/janitor-check-in-create.component';
import { JanitorCheckInEditComponent } from './container/janitor-check-in-edit/janitor-check-in-edit.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: JanitorCheckInContainerComponent,
    children: [
      { path: '', component: JanitorRecordsComponent },
      { path: 'new', component: JanitorCheckInCreateComponent },
      { path: ':id', component: JanitorCheckInEditComponent }
    ]
  }
];
@NgModule({
  declarations: [...JanitorCheckInComponents, ...JanitorCheckInContainers],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class JanitorCheckInModule { }
