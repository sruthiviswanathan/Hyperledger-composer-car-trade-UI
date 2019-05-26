import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import {FormGroup,FormControl, FormArray } from '@angular/forms';
import { Features } from '../features';
import { AddAssetService } from '../service/add-asset.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent implements OnInit {

  fuelType = ['PETROL','DIESEL','LPG'];
  speedUnit=['KM_PER_HR','M_PER_HR'];
  mileageUnit=['KM_PER_L','M_PER_L'];
  priceUnit=['THOUSAND','LAKHS','CRORES'];

  constructor(
    public assetService:AddAssetService
  ,private toastr: ToastrService) { }

  flag:any;
  error:any;
  ngOnInit() {
  }

  carModel = new FormGroup({
    name : new FormControl(),
    color : new FormControl(),
    fuel : new FormControl(),
    manufacturer : new FormControl(),
    manufactureYear : new FormControl(),
    manufacturerId: new FormControl(),  
    speed : new FormControl(),
    speedUnit : new FormControl(),
    mileage:new FormControl(),
    mileageUnit:new FormControl(),
    price:new FormControl(),
    priceUnit:new FormControl(),

});

  onClickSubmit(carModel: FormArray){
    var newCar ={
      
        "$class": "org.zilker.tradecar.newCar",
        "carName": carModel.value.name,
        "features": {
          "$class": "org.zilker.tradecar.Features",
          "type": carModel.value.fuel,
          "color": carModel.value.color,
          "manufacturer": carModel.value.manufacturer,
          "manufactureYear": carModel.value.manufactureYear,
          "speed": carModel.value.speed,
          "speedUnit": carModel.value.speedUnit,
          "mileage": carModel.value.mileage,
          "mileageUnit": carModel.value.mileageUnit
        },
        "registrationDate": new Date().toLocaleString(),
        "price": carModel.value.price,
        "priceUnit": carModel.value.priceUnit,
        "owner": "resource:org.zilker.tradecar.Manufacturer#"+carModel.value.manufacturerId
      }

    console.log(newCar);
    this.assetService.addAsset(newCar)
    .then(data =>{
      this.flag= true;
      this.toastr.success('ADDED ASSET SUCCESSFULLY!');
    })
    .catch(err =>{
      this.error = true;
      this.toastr.success('ADDING ASSET FAILED!');
    })
  
  }

}
