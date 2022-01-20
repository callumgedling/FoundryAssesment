import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEmployee } from '../employee';
import {Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //watch out for "employee", e may need to be capital
  employee: IEmployee;
  private apiurl: string = "http://localhost:3000/employees"

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.apiurl);
  }

  addEmployee(employee: IEmployee):Observable<IEmployee> {
    return this.http.post<IEmployee>(this.apiurl, employee, httpOptions);
  }

  deleteEmployee(employee: IEmployee): Observable<IEmployee> {
    const url = `${this.apiurl}/${employee.id}`;
    return this.http.delete<IEmployee>(url);
  }

  editEmployee(emplpoyee: IEmployee):Observable<IEmployee>{
    const url = `${this.apiurl}/${emplpoyee.id}`;
    console.log(emplpoyee)
    return this.http.put<IEmployee>(url, emplpoyee);
  }


}





