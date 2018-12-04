import { NgModule } from '@angular/core';
import { TrainCommponents } from './component';
import { TrainContainers } from './container';
import { SharedModule } from 'src/lib/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { TrainContainerComponent } from './container/train-container/train-container.component';
import { TrainListContainerComponent } from './container/train-list-container/train-list-container.component';
import { TrainEditContainerComponent } from './container/train-edit-container/train-edit-container.component';
import { TrainCreateContainerComponent } from './container/train-create-container/train-create-container.component';


const routes: Routes = [
  {
    path: '',
    component: TrainContainerComponent,
    children: [
      { path: '', component: TrainListContainerComponent },
      { path: 'new', component: TrainCreateContainerComponent },
      { path: ':id', component: TrainEditContainerComponent }
    ]
  }
];
@NgModule({
  declarations: [...TrainCommponents, ...TrainContainers],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TrainModule { }
