import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

const SharedModules = [
  CommonModule,
  FlexLayoutModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  HttpClientModule,
  MaterialModule,
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
