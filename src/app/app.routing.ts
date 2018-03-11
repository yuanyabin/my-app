import { Routes, RouterModule } from '@angular/router';
// import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';

import { NotFoundComponent, LoginComponent } from './shared/components';

const routes: Routes = [
    {path: '', redirectTo: 'page', pathMatch: 'full'},
    {path: 'page', loadChildren: 'app/core/pages/page.module#PageModule'},
    {path: 'login', component: LoginComponent},
    {path: '**', component: NotFoundComponent}

];

  @NgModule({
    imports: [
      RouterModule.forRoot(
        routes,
        { enableTracing: true }
      )
    ],
    exports: [
      RouterModule
    ]
  })

  export class AppRoutingModule {}
