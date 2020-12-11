import { Component, OnInit } from '@angular/core';
import { Bouquets } from '../shared/bouquets';
import { BouqService } from '../shared/bouq.service';

@Component({
  selector: 'app-colombia',
  templateUrl: './colombia.component.html',
  styleUrls: ['./colombia.component.css']
})
export class ColombiaComponent implements OnInit {

  colombia: Bouquets[];

  constructor(private bouqService: BouqService){ this.colombia = []; }

  ngOnInit() {
      this.colombia = this.bouqService.getBouq('colombia');
  }

  addItem(item){
    this.bouqService.addItem(item);
  }
}
