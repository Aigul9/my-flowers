import { Component, OnInit } from '@angular/core';
import { Bouquets } from '../shared/bouquets';
import { BouqService } from '../shared/bouq.service';

@Component({
  selector: 'app-basket-box',
  templateUrl: './basket-box.component.html',
  styleUrls: ['./basket-box.component.css']
})
export class BasketBoxComponent implements OnInit {

  basketbox: Bouquets[];

  constructor(private bouqService: BouqService){ this.basketbox = []; }

  ngOnInit() {
      this.basketbox = this.bouqService.getBasketBox();
  }

  addItem(item){
    this.bouqService.addItem(item);
  }
}
