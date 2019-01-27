import { Component, OnInit } from '@angular/core';
import {Crop} from '../../model/crop/crop'
@Component({
  selector: 'app-crop-card',
  templateUrl: './crop-card.component.html',
  styleUrls: ['./crop-card.component.css']
})
export class CropCardComponent implements OnInit {
  public crops: Array<Crop>
  constructor() { }

  ngOnInit() {
    this.crops =[ 
      new Crop("Ancient Fruit", "Spring/Summer/Fall", 28, 0, true, 7, 550, 57.14,"Cart sells for 100-1000g"),
      new Crop("Blue Jazz", "spring", 7, 30, false, 0, 50, 2.86, "")
    ]
  }
}
