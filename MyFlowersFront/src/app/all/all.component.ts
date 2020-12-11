import { Component, OnInit } from '@angular/core';
import { Bouquets } from '../shared/bouquets';
import { BouqService } from '../shared/bouq.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  all: Bouquets[];

  constructor(private bouqService: BouqService){ this.all = []; }

  ngOnInit() {
      this.all = this.bouqService.getBouq();
  }

  addItem(item){
    this.bouqService.addItem(item);
  }
}
