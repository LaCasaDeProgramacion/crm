import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
 const providers = [];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
@NgModule({})
export class FrontSharedModule{
   
  static forRoot(): ModuleWithProviders {
    
    return {
        
      ngModule: AppModule,
      providers: providers
    }
  }
}
