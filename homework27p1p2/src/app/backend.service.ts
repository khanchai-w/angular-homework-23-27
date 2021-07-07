import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getSkill(){
    return [
      {
        name: 'HTML-CSS',
        rate: 80
      },
      {
        name: 'JAJA',
        rate: 60
      },
      {
        name: 'JavaScript',
        rate: 40
      },
      {
        name: 'SpringBoot',
        rate: 50
      },{
        name: 'SQL',
        rate: 70
      }
    ]

  }

  getAboutMe(){
    return [{
      name: 'นายขรรค์ชัย วงศ์สิทธิ์',
      age: 38,
      career: 'กรรมกรห้องแอร์',
      edu: 'วิทยาการคอมพิวเตอร์'
    }];
  }

  getContactMe(){
    return  [{
        address: 'อ.เมือง จ.มุกดาหาร 49000',
        line: 'hs3wmn',
        face: 'hs3wmn'
      }];
  }
}
