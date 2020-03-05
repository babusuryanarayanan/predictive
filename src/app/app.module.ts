import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManufactureComponent } from './manufacture/manufacture.component';
import { TransformerComponent } from './transformer/transformer.component';
import { ParameterComponent } from './parameter/parameter.component';
import { SnIndicatorComponent } from './sn-indicator/sn-indicator.component';
import { SnIndicatorChildComponent } from './sn-indicator-child/sn-indicator-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    ManufactureComponent,
    TransformerComponent,
    ParameterComponent,
    SnIndicatorComponent,
    SnIndicatorChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
