import { Component, OnInit } from '@angular/core';
import { Bouquets } from '../shared/bouquets';
import { BouqService } from '../shared/bouq.service';

@Component({
  selector: 'app-russia',
  templateUrl: './russia.component.html',
  styleUrls: ['./russia.component.css']
})
export class RussiaComponent implements OnInit {

  russia: Bouquets[];

  constructor(private bouqService: BouqService){ this.russia = []; }

  ngOnInit() {
      this.russia = this.bouqService.getBouq('russia');
  }

  addItem(item){
    this.bouqService.addItem(item);
  }
}
