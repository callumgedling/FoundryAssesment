import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EngagementService } from 'src/app/services/engagement.service';
import { IEngagement } from '../../engagement';
import { faTimes, faEdit, faStop } from '@fortawesome/free-solid-svg-icons';
import  { Router, ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-engagements',
  templateUrl: './engagements.component.html',
  styleUrls: ['./engagements.component.css']
})
export class EngagementsComponent implements OnInit {

  showAddEngagement: boolean = false;
  engagements: IEngagement[] = [];
  faTimes = faTimes;
  faEdit = faEdit;
  faStop = faStop;
  engagement: IEngagement;
  searchTerm: string;
  name: string;
  searchCondition: string;
  subscription: Subscription;


  constructor(private engagementService: EngagementService, private router: Router, private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value => this.showAddEngagement = value));
   }

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
    this.router.navigateByUrl(`/edit/engagement/${engagement.id}`)
  }

  goToEngagementClient(engagement: IEngagement){
    this.router.navigateByUrl(`/engagement/client/${engagement.client}`)
  }

  goToEngagementEmployee(engagement: IEngagement){
    this.router.navigateByUrl(`/engagement/employee/${engagement.employee}`)
  }


  toggleAddEngagement(){
    this.uiService.toggleAddEngagement();
  }
  
  idEmployeeSearch(){
    this.searchCondition = "idemp"
  }

  nameSearch(){
    this.searchCondition = "name"
  }

  idClientSearch(){
    this.searchCondition = "idclient"
  }

  Search(){
    if(this.searchCondition === "name"){
      if(this.name != ""){
        this.engagements = this.engagements.filter(res=>{
          return res.name.toUpperCase().match(this.name.toUpperCase())
        });
  
      }
  
      else if (this.name == ""){
        this.ngOnInit();
      }
    }
    else if (this.searchCondition === "idemp"){
      if(this.name != ""){
        this.engagements = this.engagements.filter(res=>{
          return res.employee.match(this.name)
        });
  
      }
  
      else if (this.name == ""){
        this.ngOnInit();
      }
    }
    else if (this.searchCondition === "idclient"){
      if(this.name != ""){
        this.engagements = this.engagements.filter(res=>{
          return res.client.match(this.name)
        });
  
      }
  
      else if (this.name == ""){
        this.ngOnInit();
      }
    }
   
  }

}



