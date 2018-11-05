import { NgModule } from '@angular/core';
import { HomeContainers } from './container';
import { HomeComponents } from './component';
import { SharedModule } from 'src/lib/shared/shared.module';
import { RootModule } from 'src/lib/core';


@NgModule({
  declarations: [ ...HomeContainers, ...HomeComponents],
  imports: [ SharedModule, RootModule ],
  exports: [ ...HomeContainers, ...HomeComponents],
  providers: [],
})
export class HomeModule {}
