import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.services';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
 sortedData:any=[]
  constructor(private userDataService: UserDataService) { }
  ngOnInit(): void {
 
    this.getAllUsers();
   
  }
  compare(a:any,b:any){
    if(a.code.length<b.code.length){
      return -1;

    }
    if(a.code.length>b.code.length){
      return 1;
      
    }
    return 0;
  }
  getAllUsers() {
    this.userDataService.getUsers().subscribe(data => {
      console.log("****",data)

      //this.sortedData.push(data[0]);
      //console.log("8",this.sortedData)
   data.sort(this.compare);
   console.log("8888",data)
   this.sortedData=data
    });
  }

}
