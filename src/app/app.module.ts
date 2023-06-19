import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DonationforlifeComponent } from './donationforlife/donationforlife.component';
import { FormComponent } from './form/form.component';
import { GetinvolveComponent } from './getinvolve/getinvolve.component';
import { HomeComponent } from './home/home.component';
import { HowdonationworksComponent } from './howdonationworks/howdonationworks.component';
import { LivingdonarComponent } from './livingdonar/livingdonar.component';
import { WhatcanbedonatedComponent } from './whatcanbedonated/whatcanbedonated.component';
import { WhatisComponent } from './whatis/whatis.component';
import { WhocandonateComponent } from './whocandonate/whocandonate.component';
import { PipePipe } from './pipe.pipe';
import { DonationafterlifeComponent } from './donationafterlife/donationafterlife.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    DonationforlifeComponent,
    FormComponent,
    GetinvolveComponent,
    HomeComponent,
    HowdonationworksComponent,
    LivingdonarComponent,
    WhatcanbedonatedComponent,
    WhatisComponent,
    WhocandonateComponent,
    PipePipe,
    DonationafterlifeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }