// modules
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RoutingModule, RootRoutes } from './app.route.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppCommonModule } from'../_common/common.module';
// components
import { AppComponent } from './app.component';
import { f1Component } from '../feature1/f1.component';
import { f2Component } from '../feature2/f2.component';
import { f3Component } from '../feature3/f3.component';


@NgModule({
  imports: [
    // other moddules
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppCommonModule
  ],
  declarations: [
    // component
    AppComponent,
    f1Component,
    f2Component,
    f3Component
    // pipes

  ],
  entryComponents:[
    // dyanmic components  
  ],
  providers:[
    // services
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
