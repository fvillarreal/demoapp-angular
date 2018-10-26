import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  protected username: string="";
  protected disabled: boolean=true;
  constructor() { }

  ngOnInit() {
  }

  onUserReset() {
    this.username="";
    this.disabled=true;
  }

  onUserType() {
    if(this.username.length==0) {
      this.disabled=true;
    }
    else {
      this.disabled=false;
    }
  }

}
