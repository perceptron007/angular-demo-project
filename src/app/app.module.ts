import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from 'src/lib/shared/shared.module';
import { HomeModule } from './module/home/home.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HomeModule,
    SharedModule,
    AppRoutingModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
