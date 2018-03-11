import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { PageComponent } from './page.component';
import { PageRoutingModule } from './page.routing';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        PageComponent,
        HomeComponent
    ],
    imports: [
        PageRoutingModule,
        SharedModule,
        NgZorroAntdModule
    ],
    providers: []
})

export class PageModule { }
