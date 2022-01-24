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
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { EditEngagementsComponent } from './components/edit-engagements/edit-engagements.component';
import { UpdateEngagementComponent } from './components/update-engagement/update-engagement.component';
import { EngagementsByClientComponent } from './components/engagements-by-client/engagements-by-client.component';
import { MyFilterPipe } from './my-filter.pipe';
import { EngagementsByEmployeeComponent } from './components/engagements-by-employee/engagements-by-employee.component';
import { EmployeeFilterPipe } from './employee-filter.pipe';
import { EngagementsButtonComponent } from './components/engagements-button/engagements-button.component';
import { HomePageComponent } from './components/home-page/home-page.component';


export const appRoutes: Routes = [
  {path: 'clients', component: ClientsComponent},
  {path: 'edit/:id', component: UpdateClientComponent},
  {path: 'search/:searchTerm', component: ClientsComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'engagements', component: EngagementsComponent},
  {path: 'edit/employee/:id', component: UpdateEmployeeComponent},
  {path: 'edit/engagement/:id', component: UpdateEngagementComponent},
  {path: 'engagement/client/:id', component: EngagementsByClientComponent},
  {path: 'engagement/employee/:id', component: EngagementsByEmployeeComponent},
  {path: '', component: HomePageComponent}
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
    EditEmployeeComponent,
    UpdateEmployeeComponent,
    EditEngagementsComponent,
    UpdateEngagementComponent,
    EngagementsByClientComponent,
    MyFilterPipe,
    EngagementsByEmployeeComponent,
    EmployeeFilterPipe,
    EngagementsButtonComponent,
    HomePageComponent,
    //UpdateEngagementComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
