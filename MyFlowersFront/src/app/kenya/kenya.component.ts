import { Component, OnInit } from '@angular/core';
import { Bouquets } from '../shared/bouquets';
import { BouqService } from '../shared/bouq.service';

@Component({
  selector: 'app-kenya',
  templateUrl: './kenya.component.html',
  styleUrls: ['./kenya.component.css']
})
export class KenyaComponent implements OnInit {

  kenya: Bouquets[];

  constructor(private bouqService: BouqService){ this.kenya = []; }

  ngOnInit() {
      this.kenya = this.bouqService.getBouq('kenya');
  }

  addItem(item){
    this.bouqService.addItem(item);
  }
}
