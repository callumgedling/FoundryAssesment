import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {IEngagement} from '../../engagement';
import {ActivatedRoute, Router, Params} from '@angular/router';
import{Observable} from 'rxjs';
import { EngagementService } from 'src/app/services/engagement.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-engagements-by-client',
  templateUrl: './engagements-by-client.component.html',
  styleUrls: ['./engagements-by-client.component.css']
})
export class EngagementsByClientComponent implements OnInit {

 
  faedit = faEdit;
  id: string;
  name: string;
  client: string;
  employee: string;
  started: Date;
  ended: Date;
  description: string;
  engagements: IEngagement[] = [];
  test: string;
  filterargs: any;

  constructor(private route: ActivatedRoute, private engagementService: EngagementService) { }

  ngOnInit(): void { 
    this.route.pathFromRoot[1].url.subscribe(val => console.log("YEA" + val[2].path));


    this.client = this.route.snapshot.params["id"]
    this.filterargs = {client: this.client};
    this.engagementService.getEngagements().subscribe((engagements: any[]) => (this.engagements = engagements));

    
  }
 
    

}





