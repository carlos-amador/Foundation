import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'feature1',
  templateUrl: './f1.component.html',
  styleUrls: ['./f1.component.css']
})
export class f1Component { 


    constructor(private route: ActivatedRoute){

    } 

    
}
