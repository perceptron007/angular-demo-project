import { NgModule } from '@angular/core';
import { HomeContainers } from './container';
import { HomeComponents } from './component';



@NgModule({
  declarations: [ ...HomeContainers, ...HomeComponents],
  imports: [  ],
  exports: [],
  providers: [],
})
export class HomeModule {}
