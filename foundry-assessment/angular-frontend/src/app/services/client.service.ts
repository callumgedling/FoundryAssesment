import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IClient } from '../client';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  Client: IClient;
  private apiurl: string = "http://localhost:3000/clients"
  // private editUrl: string = `http://localhost:3000/clients/${this.Client.id}`

  constructor(private http: HttpClient) { }

  getClients(): Observable<IClient[]>{
    return this.http.get<IClient[]>(this.apiurl);
  }

  addClient(client: IClient):Observable<IClient> {
    return this.http.post<IClient>(this.apiurl, client, httpOptions);
  }

  deleteClients(client: IClient): Observable<IClient> {
    const url = `${this.apiurl}/${client.id}`;
    return this.http.delete<IClient>(url);
  }

  editClient(client: IClient):Observable<IClient>{
    const url = `${this.apiurl}/${client.id}`;
    console.log(client)
    return this.http.put<IClient>(url, client);
  }

}


