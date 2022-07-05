import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {HttpClientModule} from '@angular/common/http'

import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { BasicServiceService } from './basic-service.service';

import { FormsModule } from '@angular/forms';

const appRputes:Routes=[
  {path:'',component:AppComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRputes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BasicServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
