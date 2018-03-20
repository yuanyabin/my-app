import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
  declarations: [
    LoginComponent,
    NotFoundComponent,
    DialogComponent
  ],
  imports: [
    NgZorroAntdModule.forRoot(),
  ],
  providers: [],
})
export class SharedModule { }
