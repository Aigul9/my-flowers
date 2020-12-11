import { Component, OnInit } from '@angular/core';
import { Bouquets } from '../shared/bouquets';
import { BouqService } from '../shared/bouq.service';

@Component({
  selector: 'app-ecuador',
  templateUrl: './ecuador.component.html',
  styleUrls: ['./ecuador.component.css']
})
export class EcuadorComponent implements OnInit {

  ecuador: Bouquets[];

  constructor(private bouqService: BouqService){ this.ecuador = []; }

  ngOnInit() {
      this.ecuador = this.bouqService.getBouq('ecuador');
  }

  addItem(item){
    this.bouqService.addItem(item);
  }
}
