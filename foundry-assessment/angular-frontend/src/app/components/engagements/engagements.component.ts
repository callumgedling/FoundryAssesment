import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EngagementService } from 'src/app/services/engagement.service';
import { IEngagement } from '../../engagement';
import { faTimes, faEdit, faStop } from '@fortawesome/free-solid-svg-icons';
import  { Router, ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';

@Component({
  selector: 'app-engagements',
  templateUrl: './engagements.component.html',
  styleUrls: ['./engagements.component.css']
})
export class EngagementsComponent implements OnInit {

  engagements: IEngagement[] = [];
  faTimes = faTimes;
  faEdit = faEdit;
  faStop = faStop;
  engagement: IEngagement;
  searchTerm: string;
  name: string;
  current_date: Date = new Date();
  test_date : Date = new Date("2019-01-31T00:00:00");


  constructor(private engagementService: EngagementService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.engagementService.getEngagements().subscribe((engagements: any[]) => (this.engagements = engagements));
  }

  addEngagement(engagement:IEngagement) {
    this.engagementService.addEngagement(engagement).subscribe((engagement) => (this.engagements.push(engagement)));
  }

  deleteEngagement(engagement: IEngagement){
    this.engagementService.deleteEngagement(engagement).subscribe(() => (this.engagements = this.engagements.filter(c => c.id !== engagement.id)));
  }

  endEngagement(engagement: IEngagement){
    this.engagementService.endEngagement(engagement).subscribe((engagement) => this.engagements.push(engagement)),
    err => console.log('HTTP Error', err);
  }

  goToEditEngagement(engagement: IEngagement){
    console.log(engagement);
    this.router.navigateByUrl(`/edit/engagement/${engagement.id}`)
    console.log(engagement.id);
  }

  goToEngagementClient(engagement: IEngagement){
    this.router.navigateByUrl(`/engagement/client/${engagement.client}`)
  }

  goToEngagementEmployee(engagement: IEngagement){
    this.router.navigateByUrl(`/engagement/employee/${engagement.employee}`)
  }

  Search(){
    if(this.name != ""){
      this.engagements = this.engagements.filter(res=>{
        return res.name.toUpperCase().match(this.name.toUpperCase())
      });

    }

    else if (this.name == ""){
      this.ngOnInit();
    }
   
  }

}



