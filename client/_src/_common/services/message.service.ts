import rxjs = require("rxjs");
import { Injectable, OnDestroy } from "@angular/core";
//import * as cmn from "../entities/entities"


export const enum EventType{
    sale,
    review,
    loading,
    loaded,
}


export interface IMessageService{
    publish(event: EventType): void;
    subscribe(handler: Function): void;
    // getObservalbe(): rxjs.Observable<any>;
    event: EventType;
}

@Injectable()
export class MessageService implements IMessageService, OnDestroy {
    
    private message : rxjs.Subject<any>;
    public event: EventType;

    constructor(){
        this.message = new rxjs.Subject<any>();
    } 

    get messages() {
        return this.message.asObservable(); 
    }


    public publish(event: EventType){
        this.message.next(event);
    }

    public subscribe(handler: Function){
        this.message.subscribe((event)=> handler(event));
    }

    // public getObservalbe(): rxjs.Observable<any>{
    //     return this.message.asObservable()
    // }



    public ngOnDestroy(){
        this.message.complete();
    }


}
