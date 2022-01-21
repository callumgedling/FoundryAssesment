import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {IEngagement} from '../../engagement';
import {ActivatedRoute, Router, Params} from '@angular/router';
import { EngagementService } from 'src/app/services/engagement.service';


@Component({
  selector: 'app-engagements-by-employee',
  templateUrl: './engagements-by-employee.component.html',
  styleUrls: ['./engagements-by-employee.component.css']
})
export class EngagementsByEmployeeComponent implements OnInit {

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
    this.employee = this.route.snapshot.params["id"]
    this.filterargs = {employee: this.employee};
    this.engagementService.getEngagements().subscribe((engagements: any[]) => (this.engagements = engagements));

    
  }

}







