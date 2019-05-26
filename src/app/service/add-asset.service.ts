import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AddAssetService {

  isTransactionSuccess: boolean;

  constructor(private httpClient: HttpClient) { }

  addAsset(newCar) {

    return this.httpClient.post('http://localhost:3000/api/newCar', newCar)
      .toPromise()
      .then(
        (data: any) => {
          console.log(data);
          this.isTransactionSuccess=true;
         return Promise.resolve(this.isTransactionSuccess);
        }
      ).catch(err => {
        this.isTransactionSuccess=false;
        return Promise.reject(this.isTransactionSuccess);
      })
  }

  carTrade(trade) {
   return this.httpClient.post('http://localhost:3000/api/TradeCar', trade)
    .toPromise()
    .then(
      (data: any) => {
        console.log(data);
        this.isTransactionSuccess=true;
       return Promise.resolve(this.isTransactionSuccess);
      }
    ).catch(err => {
      console.log(err);
      this.isTransactionSuccess=false;
      return Promise.reject(this.isTransactionSuccess);
    })
  }

  getAllCars() {
    return this.httpClient.get('http://localhost:3000/api/Car')
      .toPromise()
      .then(data => {
        console.log(data);
        return Promise.resolve(data);
      })
      .catch(err => {
        console.log(err);
        return Promise.reject(err);
      })



  }
}
