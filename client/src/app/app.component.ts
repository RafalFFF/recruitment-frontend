import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  showUserName:boolean=false;
  reset:boolean=false;

  showName(flag:boolean){
    this.showUserName=flag;
  }
  resetAplication(flag:boolean){
    this.reset=flag;
  }

}
