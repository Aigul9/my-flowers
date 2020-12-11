import { Component, OnInit } from '@angular/core';
import { Bouquets } from '../shared/bouquets';
import { BouqService } from '../shared/bouq.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  box: Bouquets[];

  constructor(private bouqService: BouqService){ this.box = []; }

  ngOnInit() {
      this.box = this.bouqService.getBouq('box');
  }

  addItem(item){
    this.bouqService.addItem(item);
  }
}
