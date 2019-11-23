import { ListBrandsComponent } from './Components/Prospecting/Carbrand/list-brands/list-brands.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Layout/sidebar/sidebar.component';

const routes: Routes = [
   { path: 'back', component: AppComponent},
   { path: 'back/dash', component: DashboardComponent  },
   { path: 'back/sidebar', component: SidebarComponent  },
   { path: 'back/listBrands', component: ListBrandsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
