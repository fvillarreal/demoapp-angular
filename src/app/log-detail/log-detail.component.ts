import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-log-detail',
  templateUrl: './log-detail.component.html',
  styleUrls: ['./log-detail.component.css']
})
export class LogDetailComponent implements OnInit {
  @Input() dateText;
  constructor() {
  }

  ngOnInit() {  }

}
