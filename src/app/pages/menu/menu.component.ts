import { Component, OnInit } from '@angular/core';
import {OrderDetailsService } from 'src/app/services/order-details.service'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  prod:any;
  constructor(private productData:OrderDetailsService) 
  { 
    productData.ordersList().subscribe((data)=>{
      this.prod=data; 
    });

  }
  
  ngOnInit(): void {
 
  }

}
