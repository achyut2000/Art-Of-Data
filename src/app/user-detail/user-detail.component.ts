import { Component, OnInit } from '@angular/core';
import {CrudService} from './user-detail.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent  implements OnInit{

  users:any;
  username:string;
  name:string;
  country:string;
  college:string;
  dob:string;
  aoi:any[];

  constructor(private crudServie : CrudService) {   }

  ngOnInit(){
    this.crudServie.read_users().subscribe(data=>{
      this.users  = data.map(e=>{
        return{
          id:e.payload.doc.id,
          isEdit:false,
          Name:e.payload.doc.data()['name'],
          DOB:e.payload.doc.data()['dob'],
          college:e.payload.doc.data()['college']

        };
      })
      console.log(this.users);
    });
  }
  EditRecord(record){
    record.isEdit = true;
  }
  UpdateRecord(record){
    
  }
}
