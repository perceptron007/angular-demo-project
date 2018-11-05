import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeModule } from './module/home/home.module';
import { RootModule } from 'src/lib/core';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HomeModule,
    RootModule,
    AppRoutingModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
