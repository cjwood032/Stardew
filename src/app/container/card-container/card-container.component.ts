import { Component, OnInit } from '@angular/core';
import { CropCardComponent } from '../../crops/crop-card/crop-card.component';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  public wantCrops: boolean;
  public wantFish: boolean;
  constructor() { }

  ngOnInit() {
    this.wantCrops =true;
    this.wantFish= !this.wantCrops;
  }
  toggleSelection() {
    this.wantCrops = !this.wantCrops
    this.wantFish = !this.wantFish
  }
}
