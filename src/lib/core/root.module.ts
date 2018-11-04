import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

const RootModules = [
  BrowserAnimationsModule,
  BrowserModule,
]

@NgModule({
  declarations: [],
  imports: [ ...RootModules ],
  exports: [ ...RootModules ],
  providers: [],
})
export class RootModule {}
