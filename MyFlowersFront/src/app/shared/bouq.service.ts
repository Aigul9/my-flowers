import { Injectable } from '@angular/core';
import { Bouquets } from './bouquets';
import { Basket } from './basket';
import { Order } from './order';
import { HttpService } from './http.service';

@Injectable()
export class BouqService {
    bouq: Bouquets [];
    basket: Basket[];
    order: Order[];

    constructor(private httpService: HttpService) {
        this.bouq = [];
        this.basket = [];
        this.order = [];
    }
    sum() {
        let sum: number = 0;
        for(let i = 0; i < this.basket.length; i++) {
            sum += this.basket[i].sum;
        }
        return sum;
    }
    OnIncrease(item): void {
        item.kolvo++;
        item.sum=item.kolvo*item.price_bq;
        let basket = new Basket(item.image_bq, item.comp_bq, item.name_bq, item.price_bq, item.kolvo, item.id_bq, item.id_bask);
        this.httpService.sendData("addItem", basket);
    }
    OnDecrease(item): void {
        if (item.kolvo > 1) {
            item.kolvo--;
            item.sum=item.kolvo*item.price_bq;
            let basket = new Basket(item.image_bq, item.comp_bq, item.name_bq, item.price_bq, item.kolvo, item.id_bq, item.id_bask);
            this.httpService.sendData("addItem", basket);
        }
        else {
            this.deleteItem(item);
        }
    }
    onClear(): void {
        let result = confirm("Очистить корзину?");
            if (result) {
                console.log(this.basket);
                this.basket.splice(0, this.basket.length);
            }
        this.httpService.clearData();
    }
    addItem(item){
        //item - который добавляем
        //it - строка корзины
        let fl: boolean = false;
        let basket: Basket;
        for(let i = 0; i < this.basket.length; i++) {
            let it = this.basket[i];
            if (it.image_bq == item.image_bq) {
                fl = true;
                it.kolvo++;
                it.sum = it.kolvo * it.price_bq;
                basket = new Basket(it.image_bq, it.comp_bq, it.name_bq, it.price_bq, it.kolvo, it.id_bq, it.id_bask);
                break;
            }
        }
        if (fl == false) {
            basket = new Basket(item.image_bq, item.comp_bq, item.name_bq, item.price_bq, 1, item.id_bq, item.id_bask);
            this.basket.push(basket);
        }
        this.httpService.sendData("addItem", basket);
    }
    deleteItem(item) {
        console.log("delete" , item);
        let basket: Basket;
        let result = confirm("Удалить этот букет из корзины?");
        if (result) {
            for (var i = 0; i < this.basket.length; i++) {
                let it = this.basket[i];
                if (it.image_bq == item.image_bq) {
                    basket = new Basket(it.image_bq, it.comp_bq, it.name_bq, it.price_bq, it.kolvo, it.id_bq, it.id_bask);
                    this.basket.splice(i, 1);
                    break;
                }
            }
        }
        this.httpService.sendData("deleteItem", basket);
    }
    onOrder() {
        let random = Math.floor(Math.random() * (9999999 - 1000000)) + 1000000;
        for (var i= 0; i< this.basket.length; i++) {
            this.httpService.sendOrder(this.basket[i], random);
        }
        alert("Заказ оформлен! Номер заказа: " + random);
        this.onClear();
    }
    getBouq = (name): Bouquets[] => {
        this.httpService.get(name)
            .subscribe((resp: Response) => {
                for (const index in resp) {
                    const bouq1: Bouquets = new Bouquets(resp[index].id_bq, resp[index].name_bq, resp[index].price_bq, resp[index].comp_bq, resp[index].image_bq, resp[index].name_type, resp[index].country_sup);
                    this.bouq.push(bouq1);
                }
            });
        return this.bouq;
    }
	getBasket = (): Basket[] => {
        let fl: boolean = false;
        this.httpService.getBasket()
            .subscribe((resp: Response) => {
                for (const index in resp) {
                    const basket1: Basket = new Basket(resp[index].image_bq, resp[index].comp_bq, resp[index].name_bq, resp[index].price_bq, resp[index].kolvo, resp[index].id_bq, resp[index].id_bask);
                    for (var i = 0; i < this.basket.length; i++) {
                        if (this.basket[i].image_bq == basket1.image_bq) {
                            fl = true;
                        }       
                    }
                    if(fl == false) {
                        this.basket.push(basket1);
                    }
                }}
            );
        return this.basket;
    }
    getOrder = (): Order[] => {
        this.httpService.getOrder()
            .subscribe((resp: Response) => {
                for (const index in resp) {
                    const order1: Order = new Order(resp[index].id_order, resp[index].name_bq, resp[index].kolvo);
                    this.order.push(order1);
                }
            });
        return this.order;
    }
}