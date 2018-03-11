import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PageComponent } from './page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: PageComponent, children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: HomeComponent}
    ]},
    // { path:  }
];

@NgModule({
    imports: [
        RouterModule.forChild(
            routes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class PageRoutingModule { }
