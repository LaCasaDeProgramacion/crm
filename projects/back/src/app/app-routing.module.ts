import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
   { path: 'back', component: AppComponent},
   { path: 'back/dash', component: DashboardComponent  },
   { path: 'back/sidebar', component: SidebarComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
