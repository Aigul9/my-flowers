export class Basket {
	image_bq: string;
	comp_bq: string;
    name_bq: string;
    price_bq: number;
    kolvo: number;
    sum: number;
    id_bq: number;
    id_bask: number;

    constructor(image_bq: string="", comp_bq: string, name_bq: string, price_bq: number, kolvo: number, id_bq: number, id_bask: number) {
	    this.image_bq = image_bq;
		this.comp_bq = comp_bq;
        this.name_bq = name_bq;
		this.price_bq = price_bq;
        this.kolvo = kolvo;
        this.sum = this.kolvo * this.price_bq;
        this.id_bq = id_bq;
        this.id_bask = id_bask;
    }
}