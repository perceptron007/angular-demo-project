import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JanitorCheckInComponents } from './component';
import { JanitorCheckInContainers } from './container';

@NgModule({
  declarations: [...JanitorCheckInComponents, ...JanitorCheckInContainers],
  imports: [
    CommonModule
  ]
})
export class JanitorCheckInModule { }
