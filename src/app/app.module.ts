import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { EchartsNg2Module } from 'echarts-ng2';

import { PageModule } from './core/pages/page.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './core/states/reducers';
import { SharedModule } from './shared';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    // EchartsNg2Module,
    // NgxEchartsModule,
    BrowserModule,
    SharedModule,
    StoreModule.forRoot(reducer),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
