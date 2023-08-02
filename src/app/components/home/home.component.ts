import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SharingService } from 'src/app/services/sharing.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currDate:string = '';
  circleNo:any;
  wardNo:any;
  morningTime: string ='';
  eveningTime: string ='';
  name: string ='';
  data: any;
  selected: any;
  wards:number[] = [];
  constructor(private router: Router,
    private sharingService : SharingService){}

    ngOnInit(){
    this.data = this.sharingService.getData();
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
  update(e:any){
    this.selected = e.target.value
  }
}
