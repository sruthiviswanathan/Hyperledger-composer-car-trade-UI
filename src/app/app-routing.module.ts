import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { CarTradeComponent } from './car-trade/car-trade.component';
import { ViewCarsComponent } from './view-cars/view-cars.component';


const routes: Routes = [
  {path:'home' , component: HomeComponent},
  {path:'add-asset' , component: AddAssetComponent},
  {path:'car-trade' , component: CarTradeComponent},
  {path:'app-view-cars' , component: ViewCarsComponent},
  {path:'', component:AddAssetComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
