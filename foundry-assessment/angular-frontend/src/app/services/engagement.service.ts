import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEngagement } from '../engagement';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class EngagementService {

  Engagement: IEngagement;
  private apiurl: string = "http://localhost:3000/engagements"
  // private editUrl: string = `http://localhost:3000/clients/${this.Client.id}`

  constructor(private http: HttpClient) { }

  getEngagements(): Observable<IEngagement[]>{
    return this.http.get<IEngagement[]>(this.apiurl);
  }

  addEngagement(engagement: IEngagement):Observable<IEngagement> {
    return this.http.post<IEngagement>(this.apiurl, engagement, httpOptions);
  }

  editEngagement(engagement: IEngagement):Observable<IEngagement>{
    const url = `${this.apiurl}/${engagement.id}/`;
    return this.http.put<IEngagement>(url, engagement);
  }

  endEngagement(engagement: IEngagement):Observable<IEngagement>{
    const url = `${this.apiurl}/${engagement.id}/end`;
    return this.http.put<IEngagement>(url, engagement);
  }


  deleteEngagement(engagement: IEngagement): Observable<IEngagement> {
    
    const url = `${this.apiurl}/${engagement.id}`;
    return this.http.delete<IEngagement>(url);
  }

}
