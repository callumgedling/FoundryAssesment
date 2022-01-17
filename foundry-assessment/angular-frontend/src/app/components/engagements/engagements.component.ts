import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EngagementService } from 'src/app/services/engagement.service';
import { IEngagement } from '../../engagement';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
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
  engagement: IEngagement;
  searchTerm: string;
  name: string;


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

  goToEdit(engagement: IEngagement){
    console.log(engagement);
    this.router.navigateByUrl(`/edit/${engagement.id}`)
  }

  goToEmployees(){
    this.router.navigateByUrl(`/`)
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



