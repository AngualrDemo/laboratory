import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface AddLaboratory {
  labIntroduce: string; // 实验室介绍
  labName: string; // 实验室名称
  labState?: string; // 实验室预约状态
  labType?: string; // 实验室类型
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  /**
   * 用户登录
   */
  login(params: any) {
    return this.http.post('/api/user/login', params)
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
}
