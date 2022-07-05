import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  buttonImage = []
  showDialog:boolean = false;
  arrowDownImg = '../../assets/arrow-down.png'
  arrowUpImg = '../../assets/arrow-up.png'
  constructor() { }

  
  onButtonClick(){
    this.showDialog=!this.showDialog;
    console.log(this.showDialog)
  }


  ngOnInit(): void {
  }

}
