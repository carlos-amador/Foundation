// modules
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
// components
import { ValidationComponent } from './components/validation/validation.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
// services
import { MessageService } from './services/message.service';


@NgModule({
  imports: [ 
    BrowserModule,
  ],
  declarations: [
    ValidationComponent,
    SpinnerComponent
    // f2Component,
    // f3Component

  ],
  exports:[
    ValidationComponent,
    SpinnerComponent
  ],
  providers:[
    MessageService,
  ],
})
export class AppCommonModule { }
