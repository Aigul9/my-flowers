import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) { }

    sendData(func, basket) {
        let url: string;
        console.log("sending...");
        if (func == "addItem") {
            url = 'http://localhost/MyFlowers/dobasket.php?id_bq=' + basket.id_bq + "&id_bask=1&kolvo=" + basket.kolvo + "&type=1";
        }
        if (func == "deleteItem") {
            url = 'http://localhost/MyFlowers/dobasket.php?id_bq=' + basket.id_bq + "&id_bask=1&type=3";
        }
        return this.http.get(url).subscribe(
            value => {console.log("data was sent")},
            error => {
                console.log("send data error");
            });
    }
    clearData() {
        console.log("clearing...");
        return this.http.get('http://localhost/MyFlowers/dobasket.php?id_bask=1&type=2').subscribe(
            value => {console.log("cleared")},
            error => {
                console.log("clear error");
            });
    }
    sendOrder(basket, random) {
        console.log("ordering..." + random + " " + basket.kolvo);
        return this.http.get('http://localhost/MyFlowers/doorder.php?id_order=' + random + '&id_bq=' + basket.id_bq + "&kolvo=" + basket.kolvo).subscribe(
            value => {console.log("order was sent")},
            error => {
                console.log("order error");
            });
    }
    getBouq() {
        return this.http.get('http://localhost/MyFlowers/bouquets.php').pipe(
            map(resp => resp),
            catchError((error: any) => throwError(error)));
    }
	getClassic() {
        return this.http.get('http://localhost/MyFlowers/classic.php').pipe(
            map(resp => resp),
            catchError((error: any) => throwError(error)));
    }
	getRibbon() {
        return this.http.get('http://localhost/MyFlowers/ribbon.php').pipe(
            map(resp => resp),
            catchError((error: any) => throwError(error)));
    }
	getHatBox() {
        return this.http.get('http://localhost/MyFlowers/hatbox.php').pipe(
            map(resp => resp),
            catchError((error: any) => throwError(error)));
    }
	getBasketBox() {
        return this.http.get('http://localhost/MyFlowers/basketbox.php').pipe(
            map(resp => resp),
            catchError((error: any) => throwError(error)));
    }
    getGlass() {
        return this.http.get('http://localhost/MyFlowers/glass.php').pipe(
            map(resp => resp),
            catchError((error: any) => throwError(error)));
    }
    getBox() {
        return this.http.get('http://localhost/MyFlowers/box.php').pipe(
            map(resp => resp),
            catchError((error: any) => throwError(error)));
    }
    getOriginal() {
        return this.http.get('http://localhost/MyFlowers/original.php').pipe(
            map(resp => resp),
            catchError((error: any) => throwError(error)));
    }
	getBasket() {
        return this.http.get('http://localhost/MyFlowers/basket.php').pipe(
            map(resp => resp),
            catchError((error: any) => throwError(error)));
    }
    getEcuador() {
        return this.http.get('http://localhost/MyFlowers/ecuador.php').pipe(
            map(resp => resp),
            catchError((error: any) => throwError(error)));
    }
    getKenya() {
        return this.http.get('http://localhost/MyFlowers/kenya.php').pipe(
            map(resp => resp),
            catchError((error: any) => throwError(error)));
    }
    getColombia() {
        return this.http.get('http://localhost/MyFlowers/colombia.php').pipe(
            map(resp => resp),
            catchError((error: any) => throwError(error)));
    }
    getRussia() {
        return this.http.get('http://localhost/MyFlowers/russia.php').pipe(
            map(resp => resp),
            catchError((error: any) => throwError(error)));
    }
    getOrder() {
        return this.http.get('http://localhost/MyFlowers/orders.php').pipe(
            map(resp => resp),
            catchError((error: any) => throwError(error)));
    }
}