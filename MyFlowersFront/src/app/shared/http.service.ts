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
        return this.http.get(`http://localhost/MyFlowers/doorder.php?id_order=${random}&id_bq=${basket.id_bq}&kolvo=${basket.kolvo}`).subscribe(
            value => {console.log("order was sent " + date)},
            error => {
                console.log("order error");
            });
    }
	getBasket() {
        return this.get('basket');
    }
    getOrder() {
        return this.get('orders');
    }
    get(name) {
        return this.http.get('http://localhost/MyFlowers/' + name + '.php').pipe(
            map(resp => resp),
            catchError((error: any) => throwError(error)));
    }
}