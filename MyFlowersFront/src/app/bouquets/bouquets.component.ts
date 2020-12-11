import { Component, OnInit } from '@angular/core';
import { Bouquets } from '../shared/bouquets';
import { BouqService } from '../shared/bouq.service';

@Component({
  selector: 'app-bouquets',
  templateUrl: './bouquets.component.html',
  styleUrls: ['./bouquets.component.css']
})
export class BouquetsComponent implements OnInit {

  bouq: Bouquets[];

  constructor(private bouqService: BouqService){ this.bouq = []; }

  ngOnInit() {
      this.bouq = this.bouqService.getBouq();
  }
}
