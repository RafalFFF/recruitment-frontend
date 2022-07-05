import { Component, OnInit } from '@angular/core';
import {BasicServiceService} from '../basic-service.service'

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  randomData=[];
  addedText:Array<Object>=[];

  checkBoxes = [
    {id:1,select:false,caption:'Opcja pierwsza'},
    {id:2,select:false,caption:'Opcja druga'},
    {id:3,select:false,caption:'Opcja losowa'},
  ];

  onInputChange(id:any){
   this.checkBoxes.forEach(item=>{
    if(item.id===id){
      if(item.select){
        item.select=true
      }else if(!item.select){
        item.select=false;
      }
    }else item.select=false;
   });
  }


  findActiveInputIndex(){
   const activeCheckBoxIndex =  this.checkBoxes.find(item=>item.select===true);
    if(activeCheckBoxIndex===undefined){
      return alert("Wybierz opcje z bloku pierwszego")
    }else return activeCheckBoxIndex;
  }
  
  checkTextOptionForIndex(){
   const option = this.findActiveInputIndex()
   if(option!==undefined){
    var textToAdd="";
    const {id} = option;
    if(id===1 || id===2){
     const text = this.randomData[id-1]
     textToAdd=text;
    }else if(id===3){
      const randomIndex = Math.floor(Math.random()*4+3);
      const text = this.randomData[randomIndex];
      textToAdd = text;
    }
    return textToAdd
   }else return; 
  }

  
  replaceText(){
    const text = this.checkTextOptionForIndex();
    if(text!==undefined){
      this.addedText.length=0;
      this.addedText.push(text);
      console.log(this.addedText)
    }
  }

  addText(){
    const text = this.checkTextOptionForIndex();
    if(text!==undefined){
      //sprawdzanie czy dany indeks już znajduje się w tablicy
      this.addedText.push(text);
      console.log(this.addedText)
    }
  }


  constructor(private service:BasicServiceService) {

  }

  ngOnInit(): void {
    this.service.getData().subscribe((res)=>{
      this.randomData = Object.values(res)
    })  }
  
}
