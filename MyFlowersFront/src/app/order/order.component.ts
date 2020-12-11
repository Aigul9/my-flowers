import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order';
import { BouqService } from '../shared/bouq.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Order[];

  constructor(private bouqService: BouqService){ this.order = []; }

  ngOnInit() {
      this.order = this.bouqService.getOrder();
  }
}