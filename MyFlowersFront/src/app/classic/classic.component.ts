import { Component, OnInit } from '@angular/core';
import { Bouquets } from '../shared/bouquets';
import { BouqService } from '../shared/bouq.service';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {

  classic: Bouquets[];
  count: number;

  constructor(private bouqService: BouqService){ this.classic = [];}

  ngOnInit() {
      this.classic = this.bouqService.getClassic();
      this.count = this.classic.length;
  }

  addItem(item){
    this.bouqService.addItem(item);
  }
}