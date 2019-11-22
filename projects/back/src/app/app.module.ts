import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
 const providers = [];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
@NgModule({})
export class BackSharedModule{
   
  static forRoot(): ModuleWithProviders {
    
    return {
        
      ngModule: AppModule,
      providers: providers
    }
  }
}

