/**
 * 实验室管理
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLaboratoryComponent } from './add-laboratory/add-laboratory.component';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { CommonModule } from '@angular/common';
import { LaboratoryDetailComponent } from './laboratory-detail/laboratory-detail.component';
import { FormsModule } from '@angular/forms';
import { AppointmentLaboratoryComponent } from './appointment-laboratory/appointment-laboratory.component';

const routes: Routes = [
  {
    path: 'add-laboratory',
    component: AddLaboratoryComponent
  },
  {
    path: 'laboratory-detail',
    component: LaboratoryDetailComponent
  },
  {
    path: 'appointment-laboratory',
    component: AppointmentLaboratoryComponent
  },
]

@NgModule({
  // declarations: [LaboratoryListComponent],
  imports: [RouterModule.forChild(routes), NgZorroAntdMobileModule, CommonModule, FormsModule],
  exports: [RouterModule],
  declarations: [AddLaboratoryComponent, LaboratoryDetailComponent, AppointmentLaboratoryComponent]
})
export class LaboratoryManagementModule { }
