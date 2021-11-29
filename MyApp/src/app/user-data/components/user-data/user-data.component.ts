import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.services';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
})
export class UserDataComponent implements OnInit {
  sortedData: any = [];
  row1Data: any = [];
  row2Data: any = [];
  row3Data: any = [];
  row4Data: any = [];
  constructor(private userDataService: UserDataService) {}
  ngOnInit(): void {
    this.getAllUsers();
  }
  compare(a: any, b: any) {
    if (a.code.length < b.code.length) {
      return -1;
    }
    if (a.code.length > b.code.length) {
      return 1;
    }
    return 0;
  }
  getAllUsers() {
    this.userDataService.getUsers().subscribe((data) => {
      data.sort(this.compare);
      this.sortedData = data;
      this.row1Data = this.sortedData[0];
      setTimeout(() => {
        this.row2Data = this.sortedData.slice(1, 3);
      }, 2000);
      setTimeout(() => {
        this.row3Data = this.sortedData.slice(3, 6);
      }, 4000);
      setTimeout(() => {
        this.row4Data = this.sortedData.slice(6, 10);
      }, 6000);
    });
  }
}
