import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { SharedModule } from '../../shared/shared.module';
import { PageComponent } from './page.component';
import { PageRoutingModule } from './page.routing';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HomeComponent } from './home/home.component';
import { PipEchartService } from '../../shared/service-shared/echart-service';

@NgModule({
    declarations: [
        PageComponent,
        HomeComponent
    ],
    imports: [
        PageRoutingModule,
        SharedModule,
        NgZorroAntdModule,
        NgxEchartsModule,
    ],
    providers: [PipEchartService]
})

export class PageModule { }
