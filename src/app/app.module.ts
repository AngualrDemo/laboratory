import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// 公共列表页面
import { LaboratoryListComponent } from './laboratory-management/laboratory-list/laboratory-list.component'; // 实验室列表
import { AppointmentListComponent } from './appointment-management/appointment-list/appointment-list.component'; // 预约列表
import { EquipmentListComponent } from './equipment-management/equipment-list/equipment-list.component';// 设备列表
import { RepairListComponent } from './repair-management/repair-list/repair-list.component';//  
import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LaboratoryListComponent, AppointmentListComponent,EquipmentListComponent, RepairListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule
  ],
  exports: [LaboratoryListComponent, AppointmentListComponent,EquipmentListComponent, RepairListComponent],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
