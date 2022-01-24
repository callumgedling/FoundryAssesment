import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddClient: boolean = false;
  private showAddEmployee: boolean = false;
  private showAddEngagement: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddClient(): void {
    this.showAddClient = !this.showAddClient;
    this.subject.next(this.showAddClient);
  }

  toggleAddEmployee(): void {
    this.showAddEmployee = !this.showAddEmployee;
    this.subject.next(this.showAddEmployee);
  }

  toggleAddEngagement(): void {
    this.showAddEngagement = !this.showAddEngagement;
    this.subject.next(this.showAddEngagement);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
