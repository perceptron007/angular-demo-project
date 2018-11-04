import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { RootModule } from '../core';

const SharedModules = [
  CommonModule,
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  ActivatedRoute,
  HttpClient,
  MaterialModule,
  RootModule
]

@NgModule({
  declarations: [],
  imports: [
    ...SharedModules
  ],
  exports: [...SharedModules],
  providers: [],
})
export class SharedModule { }
