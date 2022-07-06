import { Component, OnInit, Input } from '@angular/core';
import {BasicServiceService} from '../basic-service.service'


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  
  @Input()
  resetFlag:boolean=false;

  randomData:Array<{id:number,text:string}>=[];
  addedData:Array<{id:number,text:string}>=[];
  addedIndex:Array<number>=[];

  checkBoxes = [
    {id:1,select:false,caption:'Opcja pierwsza'},
    {id:2,select:false,caption:'Opcja druga'},
    {id:3,select:false,caption:'Opcja losowa'},
  ];

  onInputChange(id:number){
   this.checkBoxes.forEach(item=>{
    if(item.id===id){
      if(item.select){
        item.select=false;
      }else if(!item.select){
        item.select=true;
      }
    }else item.select=false;
   });
  }

  findActiveInputId():number{
    let activeInputIndex = -1;
    this.checkBoxes.forEach(item=>{
      if(item.select){
        activeInputIndex = item.id;
      }
    });
    return activeInputIndex;
  }

  replaceText(){
    const activeInputIndex = this.findActiveInputId();
    if(activeInputIndex>0){
      this.addedData.length=0;
      this.addedIndex.length=0;
      switch (activeInputIndex) {
        case 1:
            this.addedData.push(this.randomData[0]);
            this.addedIndex.push(0); 
          break;
        case 2:
          this.addedData.push(this.randomData[1]);
          this.addedIndex.push(1); 
          break;
        case 3:
          const randomIndex = Math.floor(Math.random()*4+3);
          this.addedIndex.push(randomIndex);    
          this.addedData.push(this.randomData[randomIndex]);
          break;  
        default:
          break;
      
      }
    }else alert("Nie wybrano objci z bloku pierwszego")
    console.log(this.addedData)
  }
  addItemToList(){
    const activeInputIndex = this.findActiveInputId();
    let index=-1;
    if(activeInputIndex>0){
      switch (activeInputIndex) {
        case 1: 
          index=0;   
          break;
          case 2:
          index=1
            break;
            case 3:
            index = Math.floor(Math.random()*4+2);
            break;
        default:
          break;
      }
      let found = this.addedIndex.find(item => item === index);
      if(found!==undefined){
        alert("Taki element już istnieje w trzecim bloku");
      }else{
        index!==-1 ? this.addedIndex.push(index) : index=-1;
        this.addedData.push(this.randomData[index]);
      }
    }else alert("Nie wybrano objci z bloku pierwszego")
  }


  constructor(private service:BasicServiceService) {

  }

  ngOnInit(): void {
    this.service.getData().subscribe((res)=>{
      this.randomData = res.data
    })}
}

