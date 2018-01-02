import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { MessageService, EventType } from './message.service';


export interface IDataService {
}


@Injectable()
export class DataService implements IDataService {

    public options: RequestOptions;

    constructor(
        // params
        private http: Http,
        private messageService : MessageService
    ) {
        // body
    }


    public mockPost(){
        this.messageService.publish(EventType.loading);
        setTimeout(function() {
            this.messageService.publish(EventType.loaded);
        }, 3000);
    }

    public get(url: string, options: RequestOptions = null) {
        this.options = options;
        return this.http.get(url, options).map((respponse: Response) => {
            return Response;
        }).catch(this.handleError);
    }

    public post(url: string, payload: any = null, options: RequestOptions = null) {
        this.options = options;
        return this.http.post(url, payload, options).share().map((response: Response) => {
            return response;
        }).catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.text);
    }

}