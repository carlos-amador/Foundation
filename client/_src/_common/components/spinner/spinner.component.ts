import { Component, Input } from '@angular/core';
import { MessageService, EventType } from '../../services/message.service';

@Component({
    selector: 'spinner',
    template: '<div class="loading" *ngIf="loading"></div>',
    styleUrls:['./spinner.component.css']
})
export class SpinnerComponent {

    // errorMessage: string;
    // @Input() loading: boolean;

    // constructor() { }

  public overview:string;
  public loading: boolean = false;

  constructor(
      // params
      private messageService: MessageService

  ){
      this.messageService.messages.subscribe((evt) => this.messageHandler(evt));
  }


  protected messageHandler(event:EventType){
      console.log("app event is ");
      if(event === EventType.loading){
        this.loading = true;
        console.log("loading");
      }
      if(event === EventType.loaded){
        this.loading = false;
        console.log("loaded");
      }
      
  }



}