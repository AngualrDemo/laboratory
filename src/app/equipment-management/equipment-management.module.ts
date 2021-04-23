/**
 * 设备管理
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';

const routes: Routes = [
  {
    path: 'add-equipment',
    component: AddEquipmentComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes), NgZorroAntdMobileModule, CommonModule, FormsModule],
  declarations: [AddEquipmentComponent],
})
export class EquipmentManagementModule { }
