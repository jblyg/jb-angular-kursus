import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  toSend?: string;
  dataFromChild: any;

  constructor() { }

  ngOnInit(): void {
    this.toSend = 'tom';
  }

  sendData() {
    this.toSend = 'Value from Parent';
  }

  outputReceiver(data: any) {
    this.dataFromChild = data;
  }
}
