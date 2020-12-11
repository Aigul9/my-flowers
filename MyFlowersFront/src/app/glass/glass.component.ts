import { Component, OnInit } from '@angular/core';
import { Bouquets } from '../shared/bouquets';
import { BouqService } from '../shared/bouq.service';

@Component({
  selector: 'app-glass',
  templateUrl: './glass.component.html',
  styleUrls: ['./glass.component.css']
})
export class GlassComponent implements OnInit {

  glass: Bouquets[];

  constructor(private bouqService: BouqService){ this.glass = []; }

  ngOnInit() {
      this.glass = this.bouqService.getGlass();
  }

  addItem(item){
    this.bouqService.addItem(item);
  }
}
