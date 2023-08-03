import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent {
  constructor(private shareData: SharingService){}
  empData: any;
  // selectedList: any[] = [];
  @Input() update = 0;
  selectedList: any[] = [];
  ngOnChanges() {
    this.empData = this.shareData.getData().Data
    this.empData.forEach((emp:any) => {
      emp.selected = false;
    });
  }

  updateSelectedList(e:any){
    let emp = e.target.value;
    if(this.selectedList.indexOf(emp) != -1){
      this.selectedList.splice(this.selectedList.indexOf(emp), 1);
      this.selectedList[this.selectedList.indexOf(emp)].selected = false;
    }
    else{
      this.selectedList.push(emp);
      this.selectedList[this.selectedList.indexOf(emp)].selected = true;
    }
    e.class.toggle("selected")

  }
  submit(){

  }
}
