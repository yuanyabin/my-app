import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { EchartsNg2Module } from 'echarts-ng2';
import { HttpModule } from '@angular/http';

import { PageModule } from './core/pages/page.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './core/states/reducers';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './shared';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserEffects, RequirestEffects} from './core/states/effects';

import { API } from './api.service';

import { HttpClient, UserService } from './core/states/services';

const STATE_SERVICE = [
  HttpClient,
  UserService
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    HttpModule,
    // EchartsNg2Module,
    // NgxEchartsModule,
    BrowserModule,
    SharedModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(UserEffects),
    EffectsModule.runAfterBootstrap(RequirestEffects),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [API, STATE_SERVICE],
  bootstrap: [AppComponent]
})
export class AppModule { }
