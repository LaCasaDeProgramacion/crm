import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackSharedModule } from 'projects/back/src/app/app.module';
import { FrontSharedModule } from 'projects/front/src/app/app.module';

const routes: Routes = [
  {path: 'back',
  loadChildren: '../../projects/back/src/app/app.module#BackSharedModule'},
 {path: 'front',
  loadChildren: '../../projects/front/src/app/app.module#FrontSharedModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BackSharedModule.forRoot(),
    FrontSharedModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
