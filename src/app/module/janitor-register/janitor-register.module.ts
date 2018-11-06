import { NgModule } from '@angular/core';
import { JanitorRegisterComponents } from './component';
import { JanitorRegisterContainers } from './container';
import { SharedModule } from 'src/lib/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { JanitorRegisterContainerComponent } from './container/janitor-register-container/janitor-register-container.component';
import { JanitorListComponent } from './component/janitor-list/janitor-list.component';
import { JanitorRegisterCreateComponent } from './container/janitor-register-create/janitor-register-create.component';
import { JanitorRegisterEditComponent } from './container/janitor-register-edit/janitor-register-edit.component';

const routes: Routes = [
  {
    path: '',
    component: JanitorRegisterContainerComponent,
    children: [
      { path: '', component: JanitorListComponent },
      { path: 'new', component: JanitorRegisterCreateComponent },
      { path: ':id', component: JanitorRegisterEditComponent }
    ]
  }
];
@NgModule({
  declarations: [...JanitorRegisterComponents, ...JanitorRegisterContainers],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class JanitorRegisterModule { }
