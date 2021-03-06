import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface AddLaboratory {
  labIntroduce: string; // 实验室介绍
  labName: string; // 实验室名称
  labState?: string; // 实验室预约状态
  labType?: string; // 实验室类型
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  getUserType() {
    const me = this;
    let userType  = window.sessionStorage.getItem('userType') as string;
    return userType == '2' ? 'admin' : 'user'
  }
  /**
   * 用户登录
   */
  login(params: any) {
    return this.http.post('/api/user/login', params)
  }
  /**
   * 预约实验室
   */
   appointmentLaboratory(params: any) {
    return this.http.post('/api/appointment/insert', params)
  }
  /**
   *添加实验室
   *
   * @param {AddLaboratory} params
   * @returns
   * @memberof ApiServiceService
   */
  addLaboratory(params: AddLaboratory) {
    return this.http.post('/api/laboratoryIntroduce/insert', params)
  }
  addEquipment(params: any) {
    return this.http.post('/api/equipmentIntroduce/insert', params)
  }
  /**
   *修改实验室
   *
   * @param {AddLaboratory} params
   * @returns
   * @memberof ApiServiceService
   */
   editLaboratory(params: AddLaboratory) {
    return this.http.post('/api/laboratoryIntroduce/update', params)
  }
  /**
   *删除实验室
   *
   * @param {AddLaboratory} params
   * @returns
   * @memberof ApiServiceService
   */
   deleteLaboratory(id: number) {
    return this.http.get(`/api/laboratoryIntroduce/delete?ids=${id}`)
  }
  /**
   *获取实验室列表
   *
   * @param {*} params
   * @returns
   * @memberof ApiServiceService
   */
  getLaboratoryList(params: any){
    return this.http.post('/api/laboratoryIntroduce/queryPage', params)
  }
  /**
   * 根据实验室ID获取实验室预约列表
   */
   getLaboratoryAppointmentList(laboratoryId: any) {
    return this.http.get(`/api/appointment/queryByLabNmae?id=${laboratoryId}` )
  }
  /**
     * 根据实验室ID获取实验室预约列表
     */
   queryStarteByLabNmae(laboratoryId: any) {
    return this.http.get(`/api/appointment/queryStarteByLabNmae?id=${laboratoryId}` )
  }


  /**
   *实验室报修
   *
   * @param {*} params
   * @returns
   * @memberof ApiServiceService
   */
  addRepairLaboratory(params: any) {
    return this.http.post('/api/laboratoryRepair/insert', params)
  }


  getEquipmentList(params: any) {
    return this.http.post('/api/equipmentIntroduce/selectPage', params)
  }

  deleteEquipment(id: number) {
    return this.http.get(`/api/equipmentIntroduce/delete?ids=${id}`)
  }

  getNewsList(params: any) {
    return this.http.post('/api/news/selectPage', params)
  }
  addNews(params: any) {
    return this.http.post('/api/news/insert', params)
  }
  updateNews(params: any) {
    return this.http.post('/api/news/update', params)
  }
  updateEquipment(params: any) {
    return this.http.post('/api/equipmentIntroduce/update', params)
  }

  deleteNews(id:any) {
    return this.http.get(`/api/news/delete?ids=${id}`)
  }
}
