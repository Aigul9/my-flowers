export class Bouquets {
    id_bq: number;
    name_bq: string;
    price_bq: number;
    comp_bq: string;
    image_bq: string;
    name_type: string;
    country_sup: string;

    constructor(id_bq: number, name_bq: string, price_bq: number, comp_bq: string, image_bq: string="", name_type: string, country_sup: string) {
        this.id_bq = id_bq;
        this.name_bq = name_bq;
        this.price_bq = price_bq;
        this.comp_bq = comp_bq;
        this.image_bq = image_bq;
        this.name_type = name_type;
        this.country_sup = country_sup;
    }
}