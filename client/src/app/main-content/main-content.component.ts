import { Component, OnInit } from '@angular/core';
import {BasicServiceService} from '../basic-service.service'
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  randomData=[];

  checkBoxes = [
    {id:1,select:false,caption:'Opcja pierwsza'},
    {id:2,select:false,caption:'Opcja druga'},
    {id:3,select:false,caption:'Opcja losowa'},
  ];


  

  text="Tutaj dodajemy teksty";
  
  replaceText=()=>{
    this.text="Replace text";
    console.log(this.randomData)
  }

  addText=()=>{
    this.text+="Habadzibadło";
  }


  constructor(private service:BasicServiceService) {

  }

  ngOnInit(): void {
    this.service.getData().subscribe((res)=>{
      this.randomData = Object.values(res)
    })
    console.log(this.randomData)
  }
  
}
