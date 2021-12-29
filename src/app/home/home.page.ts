import { AfterViewInit, Component, ElementRef, OnInit, setTestabilityGetter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { DataServiceService } from 'src/services/data-service.service';
import { ShowPage } from '../show/show.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {

  
  f_Name:any ;

  editData:object;




  constructor(
    private service: DataServiceService,
    private route: Router

  ) {
   
   }
 

  ngOnInit() {
  
    


  }

  collages = [
    { 'name': "Sardar Patel Institute of Technology" },
    { 'name': "Indian Institute Of Technology" },
    { 'name': "St. Xaviers College" },
    { 'name': "Virmata Jijabai Technical Institute" },
  ]

  branch = [
    { 'name': "Mechanical" },
    { 'name': "Computer science" },
    { 'name': "Electronics" },
    { 'name': "Electrical" },
    { 'name': "AI " },
    { 'name': "MCA" },
    { 'name': "Civil" },
    { 'name': "Computer Technology" },
  ]

  showStudent(){
    this.route.navigate(['show']);
    
  }


  saveStudent(data: any) {
    // let studentData = JSON.stringify(data.value);

    // console.log(studentData); 

    this.service.saveStudent(data.value).subscribe((val: any) => {
      console.log(val);

      if (val !== '') {
        alert(`Thank you ${val.f_Name}. Data saved successfully. `)
      window.location.reload();

      }

    })


    // setTimeout(() => {

    //   this.service.getStudentData().subscribe((val:any)=>{
    //     console.log(val);

    //   })

    // }, 5000);

    data.reset();
  }

 
}


