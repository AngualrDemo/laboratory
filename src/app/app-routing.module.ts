import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'user-home',
    data: {
      name: '用户管理'
    },
    loadChildren: ()=>import('./user-management/user-management.module').then((mod)=>mod.UserManagementModule)
  },
  {
    path: 'repair-home',
    data: {
      name: '报修管理'
    },
    loadChildren: ()=>import('./repair-management/repair-management.module').then((mod)=>mod.RepairManagementModule)
  },
  {
    path: 'laboratory-home',
    data: {
      name: '实验室管理'
    },
    loadChildren: ()=>import('./laboratory-management/laboratory-management.module').then((mod)=>mod.LaboratoryManagementModule)
  },
  {
    path: 'equipment-home',
    data: {
      name: '设备管理'
    },
    loadChildren: ()=>import('./equipment-management/equipment-management.module').then((mod)=>mod.EquipmentManagementModule)
  },
  {
    path: 'news-home',
    data: {
      name: '设备管理'
    },
    loadChildren: ()=>import('./news/news.module').then((mod)=>mod.NewsModule)
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
