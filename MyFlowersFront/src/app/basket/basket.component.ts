import { Component, OnInit } from '@angular/core';
import { BouqService } from '../shared/bouq.service';
import { Basket } from '../shared/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  basket: Basket[] = [];

  constructor(private bouqService: BouqService){ this.basket = []; }

  ngOnInit() {
    this.basket = this.bouqService.getBasket();
    console.log(this.basket);
    console.log(this.basket.length);
  }

  OnIncrease(basket): void {
    this.bouqService.OnIncrease(basket);
  }
  
  OnDecrease(basket): void {
    this.bouqService.OnDecrease(basket);
  }
  deleteItem(item){
    this.bouqService.deleteItem(item);
  }
  sum(){
    return this.bouqService.sum();
  }
  onClear() {
    this.bouqService.onClear();
  }
  onOrder() {
    this.bouqService.onOrder();
  }
}