import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
