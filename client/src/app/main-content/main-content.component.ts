import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  checkBoxes = [
    {id:1,select:false,caption:'Opcja pierwsza'},
    {id:2,select:false,caption:'Opcja druga'},
    {id:3,select:false,caption:'Opcja losowa'},
  ];


  

  text="Tutaj dodajemy teksty";
  
  replaceText=()=>{
    this.text="Replace text";
  }

  addText=()=>{
    this.text+="Habadzibadło";
  }


  constructor() {

  }

  ngOnInit(): void {
    console.log(this.checkBoxes);
  }

}
