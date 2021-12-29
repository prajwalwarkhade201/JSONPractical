import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/services/data-service.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {

  students = [];
  constructor(
    private service: DataServiceService,
    private route: Router
  ) { }

  ngOnInit() {


    this.service.getStudentData().subscribe((val: any) => {
      


       setTimeout(() => {

        this.students  = val;

       }, 0);
      console.log(this.students);
          
    })
  }





  // edit(data:any) {

  //   this.service.sendEditData(data);

  //   this.route.navigate(['home']);


  // }




  deleteStudent(id) {
    this.service.deleteData(id).subscribe((val: any) => {
      console.log(val);

    })

    window.location.reload();


   
  }

  AddStudent(){
    this.route.navigate(['home']);
    
  }

  

}
