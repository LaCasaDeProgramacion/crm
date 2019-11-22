import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppComponent } from 'projects/front/src/app/app.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'front', component: AppComponent },
  { path: 'front/navbar', component: NavBarComponent },
  { path: 'front/footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
