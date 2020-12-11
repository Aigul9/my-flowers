import { Component, OnInit } from '@angular/core';
import { Bouquets } from '../shared/bouquets';
import { BouqService } from '../shared/bouq.service';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.css']
})
export class RibbonComponent implements OnInit {

  ribbon: Bouquets[];

  constructor(private bouqService: BouqService){ this.ribbon = []; }

  ngOnInit() {
      this.ribbon = this.bouqService.getRibbon();
  }

  addItem(item){
    this.bouqService.addItem(item);
  }
}
