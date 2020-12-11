import { Component, OnInit } from '@angular/core';
import { Bouquets } from '../shared/bouquets';
import { BouqService } from '../shared/bouq.service';

@Component({
  selector: 'app-hat-box',
  templateUrl: './hat-box.component.html',
  styleUrls: ['./hat-box.component.css']
})
export class HatBoxComponent implements OnInit {

  hatbox: Bouquets[];

  constructor(private bouqService: BouqService){ this.hatbox = []; }

  ngOnInit() {
    this.hatbox = this.bouqService.getBouq('hatbox');
  }

  addItem(item){
    this.bouqService.addItem(item);
  }
}
