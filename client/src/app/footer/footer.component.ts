import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public showDialog: boolean = false;
  public showUserData: boolean = false;
  public resetAplication: boolean = false;

  @Output()
  eventUserFlag = new EventEmitter<boolean>();

  @Output()
  resetAplicatioFlag = new EventEmitter<boolean>();

  constructor() {}

  imgSrc1: string = '../../assets/black-arrow.png';
  imgSrc2: string = '../../assets/black-arrow.png';

  onMouseOver() {
    this.imgSrc1 = '../../assets/yellow-arrow.png';
  }
  onMouseOut() {
    this.imgSrc1 = '../../assets/black-arrow.png';
  }
  onMouseOver1() {
    this.imgSrc2 = '../../assets/yellow-arrow.png';
  }
  onMouseOut1() {
    this.imgSrc2 = '../../assets/black-arrow.png';
  }

  onButtonClick() {
    this.showDialog = !this.showDialog;
  }

  resetSettings() {
    this.resetAplication = true;
    let flag = this.resetAplication;
    this.resetAplicatioFlag.emit(flag);
  }

  showPersonalData() {
    this.showUserData = !this.showUserData;
    let flag = this.showUserData;
    this.eventUserFlag.emit(flag);
  }

  toggle() {
    this.showDialog = !this.showDialog;
  }

  ngOnInit(): void {}
}
