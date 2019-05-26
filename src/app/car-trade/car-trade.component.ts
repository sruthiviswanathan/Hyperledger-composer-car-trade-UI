import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormArray } from '@angular/forms';
import { CarTrade } from '../car-trade';
import { AddAssetService } from '../service/add-asset.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'car-trade',
  templateUrl: './car-trade.component.html',
  styleUrls: ['./car-trade.component.css']
})
export class CarTradeComponent implements OnInit {

  constructor(public carTradeService: AddAssetService,private toastr: ToastrService) { }

  flag:any;
  error:any;
  ngOnInit() {
  }

   carTrade = new FormGroup({
       carId : new FormControl(),
       ownerId : new FormControl()  
   });

   onClickSubmit(carTrade: FormArray){
     var tradeDetails={
        "$class": "org.zilker.tradecar.TradeCar",
        "id": carTrade.value.carId,
        "newOwner": "resource:org.zilker.tradecar.Customer#"+carTrade.value.ownerId
     }
     console.log(tradeDetails);
     this.carTradeService.carTrade(tradeDetails)
     .then(data =>{
      this.flag= true;
      this.toastr.success('CAR TRADED SUCCESSFULLY!');
    })
    .catch(err =>{
      this.error = true;
      this.toastr.error('CAR TRADING FAILED!');
    })
   }
   
 
}
