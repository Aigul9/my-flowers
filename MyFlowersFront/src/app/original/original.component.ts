import { Component, OnInit } from '@angular/core';
import { Bouquets } from '../shared/bouquets';
import { BouqService } from '../shared/bouq.service';

@Component({
  selector: 'app-original',
  templateUrl: './original.component.html',
  styleUrls: ['./original.component.css']
})
export class OriginalComponent implements OnInit {

  original: Bouquets[];

  constructor(private bouqService: BouqService){ this.original = []; }

  ngOnInit() {
      this.original = this.bouqService.getOriginal();
  }

  addItem(item){
    this.bouqService.addItem(item);
  }
}
