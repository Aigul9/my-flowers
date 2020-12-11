export class Order {
    id_order: number;
    name_bq: string;
    kolvo: number;

    constructor(id_order: number, name_bq: string, kolvo: number) {
        this.id_order = id_order;
        this.name_bq = name_bq;
        this.kolvo = kolvo;
    }
}