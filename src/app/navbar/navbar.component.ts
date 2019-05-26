import { Component, OnInit } from '@angular/core';
import { AddAssetService } from '../service/add-asset.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public getCars: AddAssetService) { }

  ngOnInit() {
  }

 
}
