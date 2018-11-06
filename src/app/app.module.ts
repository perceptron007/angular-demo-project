import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RootModule } from 'src/lib/core';
import { SharedModule } from 'src/lib/shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    RootModule,
    AppRoutingModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
