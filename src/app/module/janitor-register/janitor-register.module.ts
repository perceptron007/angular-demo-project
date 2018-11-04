import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JanitorRegisterComponents } from './component';
import { JanitorRegisterContainers } from './container';


@NgModule({
  declarations: [...JanitorRegisterComponents, ...JanitorRegisterContainers],
  imports: [
    CommonModule
  ]
})
export class JanitorRegisterModule { }
