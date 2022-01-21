import { Component, OnInit, Injectable } from '@angular/core';
import { EngagementService } from 'src/app/services/engagement.service';
import { IEngagement } from 'src/app/engagement';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-engagement',
  templateUrl: './update-engagement.component.html',
  styleUrls: ['./update-engagement.component.css']
})
export class UpdateEngagementComponent implements OnInit {

  engagements: IEngagement[] = [];

  constructor(private EngagementService: EngagementService) { }

  ngOnInit(): void {
  }


  editEngagement(engagement: IEngagement){
    this.EngagementService.editEngagement(engagement).subscribe((engagement) => this.engagements.push(engagement)),
    err => console.log('HTTP Error', err);
  }

  endEngagement(engagement: IEngagement){
    this.EngagementService.endEngagement(engagement).subscribe((engagement) => this.engagements.push(engagement)),
    err => console.log('HTTP Error', err);
  }


}


