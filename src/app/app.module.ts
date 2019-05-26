import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { CarTradeComponent } from './car-trade/car-trade.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddAssetService } from './service/add-asset.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewCarsComponent } from './view-cars/view-cars.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    AddAssetComponent,
    CarTradeComponent,
    HomeComponent,
    NavbarComponent,
    ViewCarsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule ,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()    
  ],
  providers: [
    AddAssetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
