import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  public showPassword: boolean = false;
  public password: string = "1234 of course";
  public buttonText: string = "Show password";
  public logs: string[] = [];
  public logNum:number = 0;
  constructor() {
  }

  ngOnInit() {
  }

  onClickButton() {
    var curDate:string = new Date().toLocaleString(); 
    var logText:string;
    if(this.showPassword) {
      this.showPassword = false;
      this.buttonText = "Show password";
      logText=" - button pressed: Hide";
    }
    else {
      this.showPassword = true;
      this.buttonText = "Hide password";
      logText=" - button pressed: Show";
    }
    this.logNum++;
    this.logs.push(curDate+" - "+logText);
  }
  checkClasses(i) {
    if(i>=4) {
      return true;
    }
    else {
      return false;
    }
  }
  checkBackground(i) {
    if(i>=4) {
      return "white";
    }
    else {
      return "black";
    }
  }
}
