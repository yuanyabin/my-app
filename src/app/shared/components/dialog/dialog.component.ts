import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  title: string;
  text: string;
  // callBack: Function;
  // data: any;
  isVisible = true;

  constructor() {
  }

  ngOnInit() {
    this.title = 'asdasda';
    this.text = 'asda';
  }

  handleOk = (e) => {
    console.log('点击了确定');
    // this.callBack(this.data);
    this.isVisible = false;
  }

  handleCancel = (e) => {
    console.log(e);
    this.isVisible = false;
  }
}
