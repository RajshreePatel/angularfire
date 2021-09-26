import { Component } from '@angular/core';
import { CrudService } from './service/crud.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'ekalyan';
  employeeName: any;
  employeeAge: any;
  employeeAddress: any;
  message: any;
  employee: any;


  constructor(public CrudService : CrudService){}

  /* ngOnInit()
  {
    this.CrudService.get_Allemployee().subscribe((data: any[]) =>{
      this.employee = data.map(e=>{
        return
        {
            id: e.payload.doc.id;
            name: e.payload.doc.data()['name'];
            age: e.payload.doc.data()['age'];
            address: e.payload.doc.data()['address'];

        };
      })
      console.log(this.employee);
    })
  } */


  ngOnInit(): void {
    this.getemployee();
  }

getemployee()
{ 
  
  this.CrudService.get_Allemployee().subscribe((res=>{
    this.employee = res;
    console.log(this.employee)
  }))
}
  CreateRecord()
  {
    let Record:any = {};
    Record['name'] =this.employeeName;
    Record['age'] =this.employeeAge;
    Record['address'] =this.employeeAddress;

    this.CrudService.createNewemployee(Record).then((res) =>{
      this.employeeName ="";
      this.employeeAge = undefined; 
      this.employeeAddress ="";
      console.log(res);
      this.message="data save";

    } )  .catch((error: any) => {
          console.log(error);

    });
    
    }
    
  }

