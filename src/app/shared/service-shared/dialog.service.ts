import { Injectable } from '@angular/core';
import { DialogComponent } from '../components/dialog/dialog.component';

export class DialogService {

    dialogShow: any;

    constructor() {}

    getDialog() {
        this.dialogShow = new DialogComponent();
    }
}
