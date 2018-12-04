import { NgModule } from '@angular/core';
import { PenaltyComponents } from './component';
import { PenaltyConatainers } from './container';
import { SharedModule } from 'src/lib/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { PenaltyCreateContainerComponent } from './container/penalty-create-container/penalty-create-container.component';
import { PenaltyEditContainerComponent } from './container/penalty-edit-container/penalty-edit-container.component';
import { PenaltyListContainerComponent } from './container/penalty-list-container/penalty-list-container.component';
import { PenaltyContainerComponent } from './container/penalty-container/penalty-container.component';

const routes: Routes = [
  {
    path: '',
    component: PenaltyContainerComponent,
    children: [
      { path: '', component: PenaltyListContainerComponent },
      { path: 'new', component: PenaltyCreateContainerComponent },
      { path: ':id', component: PenaltyEditContainerComponent }
    ]
  }
];
@NgModule({
  declarations: [...PenaltyComponents, ...PenaltyConatainers],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PenaltyModule { }
