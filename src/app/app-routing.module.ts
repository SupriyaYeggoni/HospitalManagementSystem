import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { WhatisComponent } from './whatis/whatis.component';
import { FormComponent } from './form/form.component';
import { GetinvolveComponent } from './getinvolve/getinvolve.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WhocandonateComponent } from './whocandonate/whocandonate.component';
import { HowdonationworksComponent } from './howdonationworks/howdonationworks.component';
import { WhatcanbedonatedComponent } from './whatcanbedonated/whatcanbedonated.component';
import { LivingdonarComponent } from './livingdonar/livingdonar.component';
import { DonationafterlifeComponent } from './donationafterlife/donationafterlife.component';

const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent,
  },
  {
    path : 'whatis',
    component : WhatisComponent,
  },
  {
    path : 'form',
    component : FormComponent,
  },
  {
    path : 'getinvolve',
    component : GetinvolveComponent,
  },
  {
    path : 'aboutus',
    component : AboutusComponent,
  },
  
  {
    path : 'whocandonate',
    component : WhocandonateComponent,
  },
  {
    path : 'howdonationworks',
    component : HowdonationworksComponent,
    // children:
    // [
    //   {
    //     path : 'livingdonar',
    //     component : LivingdonarComponent,
    //   },
    //   {
    //     path : 'donationafterlife',
    //     component : DonationafterlifeComponent,
    //   },
    // ]
  },
  {
    path : 'whatcanbedonated',
    component : WhatcanbedonatedComponent,
  },
  {
    path : 'howdonationworks/livingdonar',
    component : LivingdonarComponent,
  },
  {
    path : 'howdonationworks/donationafterlife',
    component : DonationafterlifeComponent,
  },
  
  {
    path : 'home/form',
    component : FormComponent,
  },
  {
    path : 'whatcanbedonated/form',
    component : FormComponent,
  },


  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'employee-details/:id', component: EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

