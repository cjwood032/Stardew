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
      new Crop("Blue Jazz", "Spring", 7, 30, false, 0, 50, 2.86, ""),
      new Crop("Cauliflower", "Spring", 12, 80, false, 0, 175, 7.92, "can become giant"),
      new Crop("Coffee Bean", "Spring", 10, 2500, true, 2, 15, -20.74, "4 bean per harvest"),
      new Crop("Garlic", "Spring", 4, 40, false, 0, 60, 5, "availabe starting year 2"),
      new Crop("Green Bean", "Spring", 10, 60, true, 3, 40, 7.2, "Trellis"),
      new Crop("Kale", "Spring", 6, 70, false, 0, 110, 6.67, ""),
      new Crop("Parsnip", "Spring", 4, 20, false, 0, 35, 3.75, ""),
      new Crop("Potato", "Spring", 6, 50, false, 0, 80, 5, "20% chance for more"),
      new Crop("Rhubarb", "Spring", 13, 100, false, 0, 220, 9.23, ""),
      new Crop("Strawberry", "Spring", 8, 100, true, 4, 120, 20.83, "Only avail at egg fest"),
      new Crop("Tulip", "Spring", 6, 20, false, 0, 30, 1.67, ""),
      new Crop("Blueberry", "Summer", 13, 80, true, 4, 50, 20.8, "3 blueberries per harvest"),
     
      new Crop("Hops", "Summer", 11, 60, true, 1, 25, 13.52, "Trellis"),
      new Crop("Hot pepper", "Summer", 5, 40, true, 3, 40, 10.77, ""),
      new Crop("Melon", "Summer", 12, 80, false, 0, 250, 14.17, "Can become giant"),
      new Crop("Poppy", "Summer", 7, 100, false, 0, 140, 5.71, ""),
      new Crop("Radish", "Summer", 6, 40, false, 0, 90, 8.33, ""),
      new Crop("Red Cabbage", "Summer", 9, 100, false, 0, 260, 17.78, "available starting year 2"),
      new Crop("Starfruit", "Summer", 13, 400, false, 0, 750, 26.92, "only avail at oasis"),
      new Crop("Summer Spangle", "Summer", 8, 50, false, 0, 90, 5, ""),
      new Crop("Sunflower", "Summer", 8, 200, false, 0, 80, -15, "Also yields 0-3 seeds"),
      new Crop("Tomato", "Summer", 11, 50, true, 4, 60, 9.26, ""),
      new Crop("Corn", "Summer/Fall", 14, 150, true, 4, 50, 1.92, " GPD = 7.41 over 2 seasons "),
      new Crop("Wheat", "Summer/Fall", 4, 10, false, 0, 25, 3.75, ""),
      new Crop("Amaranth", "Fall", 7, 70, false, 0, 150, 7.43, ""),
      new Crop("Artichoke", "Fall", 8, 30, false, 0, 160, 16.25, "available starting year 2"),
      new Crop("Beet", "Fall", 6, 20, false, 0, 100, 13.33, "only avail at oasis"),
      new Crop("Bok Choy", "Fall", 4, 50, false, 0, 80, 7.5, ""),
      new Crop("Cranberries", "Fall", 7, 240, true, 5, 75, 18.89, "2 berries per harvest"),
      new Crop("Eggplant", "Fall", 5, 20, true, 5, 60, 11.2, ""),
      new Crop("Fairy Rose", "Fall", 12, 200, false, 0, 290, 7.5, ""),
      new Crop("Grape", "Fall", 10, 60, true, 3, 80, 16.8, "Trellis"),
      new Crop("Pumpkin", "Fall", 13, 100, false, 0, 320, 16.92, "can become giant"),
      new Crop("Yam", "Fall", 10, 60, false, 0, 160, 10, ""),
      new Crop("Cactus", "Any Season", 12, 150, true, 3, 75, 24.11, "only in greenhouse or indoor pots"),
      new Crop("Ancient Fruit", "Spring/Summer/Fall", 28, 0, true, 7, 550, 57.14, "cart sells for 100-1,000g")
    ]
    
  }
  getColor(season) {
    switch(season) {
        case 'Spring':
          return 'lightgreen';
        case  'Summer':
          return 'yellowgreen';
        case 'Summer/Fall':
          return 'goldenrod';
        case 'Fall':
          return'darkgoldenrod';
        default: 
          return 'gold'

    }
}
}
