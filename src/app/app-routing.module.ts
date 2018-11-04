import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'janitor', pathMatch: 'full' },
  { path: 'janitor', loadChildren: './module/janitor.module#JanitorModule'},
  { path: '**', redirectTo: 'janitor' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
