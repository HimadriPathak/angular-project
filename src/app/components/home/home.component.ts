import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { GetEmpListService } from 'src/app/services/get-emp-list.service';
import { EmpListComponent } from '../emp-list/emp-list.component';
import { SharingService } from 'src/app/services/sharing.service';


const CACHE_KEY = "UserLoginData";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  update = 0;
  selectedList: any[] = [];
  shiftSelected: boolean = true;
  currDate:string = '';
  circleNo:any;
  wardNo:any;
  morningTime: string ='';
  eveningTime: string ='';
  name: string ='';
  data: any;
  selected: any;
  wards:number[] = [];
  empData: any;
  constructor(private router: Router, private emplist: GetEmpListService, private shareData: SharingService){}

    ngOnInit(){
    this.data = JSON.parse(localStorage[CACHE_KEY] || '[]');
    this.circleNo = this.data.Table[0].CircleNo;
    this.currDate = this.data.Table[0].CurrentDate;
    this.wardNo = this.data.Table[0].WardNo;
    this.name = this.data.Table[0].UserName;
    this.morningTime = this.data.Table[0].MorningFrom + " To " + this.data.Table[0].MorningTo 
    this.eveningTime = this.data.Table[0].EveningFrom + " To " + this.data.Table[0].EveningTo

    if(this.wardNo == 0){
      for(let i = 0; i < this.data.Table1.length; i++){
        this.wards.push(this.data.Table1[i].WardNo);
      }
    }
    
  }
  callemplist(){
    if(!this.selected){
      return
    }
    this.emplist.getEmpList({
      'circleNo' : this.circleNo,
      'wardNo' : this.selected,
      'shiftID' : this.shiftSelected ? 1:2
    }).subscribe(
      (data: any) => {
        this.empData = data;
        setTimeout(() => {
          this.update++;
          this.shareData.setData(this.empData)
          

        }, 1000);
      },
      (err : any) => {
      alert("Data Not Found");
      }
    );
  }
  updateWardNo(e:any){
    this.selected = e.target.value;
    this.callemplist();
  }

  appExit() {
    alert("Exit Application");
    localStorage.clear();
    this.router.navigate(['/login']);
    
  }
}
