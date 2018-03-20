import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { PageComponent } from './page.component';
import { PageRoutingModule } from './page.routing';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {CommonModule} from '@angular/common';

import { HomeComponent } from './home/home.component';
import { PipEchartService, LineEchartService, MapEchartService } from '../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecentUserListComponent } from './home/recent-user-list/recent-user-list.component';
import { LineChartComponent } from './home/line-chart/line-chart.component';
import { RemindListComponent } from './home/remind-list/remind-list.component';
import { WarningComponent } from './home/warning/warning.component';

const SHARED_SERVICE = [
    PipEchartService,
    LineEchartService,
    MapEchartService
];

@NgModule({
    declarations: [
        PageComponent,
        HomeComponent,
        RecentUserListComponent,
        LineChartComponent,
        RemindListComponent,
        WarningComponent
    ],
    imports: [
        PageRoutingModule,
        SharedModule,
        NgZorroAntdModule,
        HttpModule,
        CommonModule,
        NgxEchartsModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot()
    ],
    providers: [SHARED_SERVICE]
})

export class PageModule { }
