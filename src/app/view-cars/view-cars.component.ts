import { Component, OnInit } from '@angular/core';
import { AddAssetService } from '../service/add-asset.service';

@Component({
  selector: 'app-view-cars',
  templateUrl: './view-cars.component.html',
  styleUrls: ['./view-cars.component.css']
})
export class ViewCarsComponent implements OnInit {

  cars:any;
  constructor(public getCars : AddAssetService) { }

  ngOnInit() {
  
      this.getCars.getAllCars()
      .then(data =>{
        this.cars = data;
      })
      .catch(err =>{
        console.log(err);
      })
    
  }

  

}
