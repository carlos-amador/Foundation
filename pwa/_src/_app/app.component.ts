import { Component, ViewEncapsulation } from '@angular/core';
import '../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css'
import '../../styles/app.css';
import { MessageService, EventType } from '../_common/services/message.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent { 

  public overview:string;
  public loading: boolean = false;

  constructor(
      // params
      private messageService: MessageService

  ){
      // body
      //this.messageService.subscribe(this.messageHandler);

    //  this.messageService.messages.subscribe((evt) => this.messageHandler(evt));

  }

  // protected messageHandler(event:EventType){
  //     console.log("app event is ");
  //     if(event === EventType.loading){
  //       this.loading = true;
  //       console.log("loading");
  //     }
  //     if(event === EventType.loaded){
  //       this.loading = false;
  //       console.log("loaded");
  //     }
      
  // }

  clicked(){
    this.overview = "This application is meant to serve as a starting point for a BDD / TDD driven Angular application"
  }

}
