import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Students} from '../mmodels/students';

import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

   
  Editdata:any = new Subject();

  url ="http://localhost:3000/students";

  constructor(
    private http: HttpClient
  ) { }


  saveStudent(data:any){
      return this.http.post(this.url, data);
  }


  getStudentData(){
    return this.http.get(this.url);
  }


  deleteData(id:number){
   return this.http.delete<Students>(this.url+'/'+id);
  }

  updateUser(id,data){
    return this.http.put<Students>(this.url+'/'+id,data);
  }


  sendEditData(data:any){
    this.Editdata.next(data);
  }





}
