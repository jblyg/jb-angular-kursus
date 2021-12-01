import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() dataReceived?: string;
  @Output() outputData = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    const data = 'Data from Child';
    this.outputData.emit(data);
  }
}
