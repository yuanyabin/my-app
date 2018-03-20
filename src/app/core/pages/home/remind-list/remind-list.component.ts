import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-remind-list',
  templateUrl: './remind-list.component.html',
  styleUrls: ['./remind-list.component.css']
})

export class RemindListComponent implements OnInit {

  inputValue: string;
  remindDate: string;
  remindList: object[] = [
  ];
  nowDate: Date;

  constructor() { }

  ngOnInit() {
    this.nowDate = new Date();
  }

  addList() {
    this.remindList.unshift({value: this.inputValue, remindDate: this.remindDate});
  }

  _disabledDate(cureent: Date): boolean {
    return cureent && cureent.getTime() <= Date.now();
  }

  getObjDate(options) {
    return new Date(options);
  }

}
