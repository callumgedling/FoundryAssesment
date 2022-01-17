import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClientsComponent } from './components/clients/clients.component';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';
import { AddClientComponent } from './components/add-client/add-client.component';
import { ButtonComponent } from './components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DeleteClientComponent } from './components/delete-client/delete-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { TestComponent } from './components/test/test.component';
import { UpdateClientComponent } from './components/update-client/update-client.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { ClientsButtonComponent } from './components/clients-button/clients-button.component';
import { EmployeesButtonComponent } from './components/employees-button/employees-button.component';
import { AddEngagementComponent } from './components/add-engagement/add-engagement.component';
import { DeleteEngagementComponent } from './components/delete-engagement/delete-engagement.component';
import { EngagementsComponent } from './components/engagements/engagements.component';





export const appRoutes: Routes = [
  {path: '', component: ClientsComponent},
  {path: 'edit/:id', component: UpdateClientComponent},
  {path: 'search/:searchTerm', component: ClientsComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'engagements', component: EngagementsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientsComponent,
    AddClientComponent,
    ButtonComponent,
    DeleteClientComponent,
    EditClientComponent,
    TestComponent,
    UpdateClientComponent,
    SearchBarComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    ClientsButtonComponent,
    EmployeesButtonComponent,
    AddEngagementComponent,
    DeleteEngagementComponent,
    EngagementsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
