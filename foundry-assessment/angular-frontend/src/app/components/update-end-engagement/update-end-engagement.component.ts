import { Component, OnInit, Injectable } from '@angular/core';
import { EngagementService } from 'src/app/services/engagement.service';
import { IEngagement } from 'src/app/engagement';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-update-end-engagement',
  templateUrl: './update-end-engagement.component.html',
  styleUrls: ['./update-end-engagement.component.css']
})
export class UpdateEndEngagementComponent implements OnInit {

  engagements: IEngagement[] = [];
  engagement: IEngagement;

  constructor(private EngagementService: EngagementService) { }

  ngOnInit(): void {
  }


  endEngagement(engagement: IEngagement){
    console.log("edit engagement in update:" + engagement.id)
    this.EngagementService.editEngagement(engagement).subscribe((engagement) => this.engagements.push(engagement)),
    err => console.log('HTTP Error', err);
    
}

}



