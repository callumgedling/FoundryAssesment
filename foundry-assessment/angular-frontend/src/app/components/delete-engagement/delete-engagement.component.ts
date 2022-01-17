import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EngagementService } from 'src/app/services/engagement.service';
import { IEngagement } from '../../engagement';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-delete-engagement',
  templateUrl: './delete-engagement.component.html',
  styleUrls: ['./delete-engagement.component.css']
})
export class DeleteEngagementComponent implements OnInit {
  @Output() onDeleteEngagement: EventEmitter<IEngagement> = new EventEmitter();
  engagement: IEngagement;
  faTimes = faTimes;

  constructor(private engagementService: EngagementService) { }


  ngOnInit(): void {
  }

  onDelete(engagement){
    this.onDeleteEngagement.emit(engagement);
  }
  
 

}