import { Component, OnInit } from '@angular/core';
import {Fish} from '../../model/fish/fish'
@Component({
  selector: 'app-fish-card',
  templateUrl: './fish-card.component.html',
  styleUrls: ['./fish-card.component.css']
})
export class FishCardComponent implements OnInit {
  public fishes: Array<Fish>
  constructor() { }

  ngOnInit() {
    this.fishes=[
      new Fish("Pufferfish", 200, "Ocean", "12-4pm", "Summer", "Sunny", 80, "Floater"),
      new Fish("Anchovy", 30, "Ocean", "Anytime", "Spring/Fall", "Any", 30, "Dart"),
      new Fish("Tuna", 100, "Ocean", "6am-7pm", "Summer/Winter", "Any", 70, "Smooth"),
      new Fish("Sardine", 40, "Ocean", "6am-7pm", "Spring/Fall/Winter", "Any", 30, "Dart"),
      new Fish("Red Mullet", 75, "Ocean", "6am-7pm", "Summer/Winter", "Any", 55, "Smooth"),
      new Fish("Herring", 30, "Ocean", "Anytime", "Spring/Winter", "Any", 25, "Dart"),
      new Fish("Eel", 85, "Ocean", "4pm-2am", "Spring/Fall", "Rainy", 70, "Smooth"),
      new Fish("Octopus", 150, "Ocean", "6am-1pm", "Summer", "Any", 95, "Sinker"),
      new Fish("Red Snapper", 50, "Ocean", "6am-7pm", "Summer/Fall/Winter", "Rainy", 40, "Mixed"),
      new Fish("Squid", 80, "Ocean", "6pm-2am", "Winter", "Any", 75, "Sinker"),
      new Fish("Sea Cucumber", 75, "Ocean", "6am-7pm", "Fall/Winter", "Any", 40, "Sinker"),
      new Fish("Super Cucumber", 250, "Ocean", "6pm-2am", "Summer/Fall", "Any", 80, "Sinker"),
      new Fish("Tilapia", 75, "Ocean", "6am-2pm", "Summer/Fall", "Any", 50, "Mixed"),
      new Fish("Albacore", 75, "Ocean", "6am-11am/6pm-2am", "Fall/Winter", "Any", 60, "Mixed"),
      new Fish("Halibut", 80, "Ocean", "6am-11am, 7pm-2am", "Spring/Summer/Winter", "Any", 50, "Sinker"),

      new Fish("Bream", 45, "River", "6pm-2am", "All", "Any", 35, "Smooth"),
      new Fish("Perch", 55, "River, F. Pond, Mt. Lake", "Anytime", "Winter", "Any", 35, "mixed"),
      new Fish("Carp", 30, "Mt. Lake, Woods, Sewers", "Anytime", "All", "Any", 15, "mixed"),     
      new Fish("Smallmouth Bass", 50, "River, F. Pond, Mt. Lake", "Anytime", "Spring/Fall", "Any", 28, "mixed"),
      new Fish("Largemouth Bass", 100, "Mt. Lake", "6am-7pm", "All", "Any", 50, "Mixed"),
      new Fish("Rainbow Trout", 65, "River, Mt. Lake", "6am-7pm", "Summer", "Sunny", 45, "Mixed"),
      new Fish("Salmon", 75, "River", "6am-7pm", "Fall", "Any", 50, "mixed"),
      new Fish("Sturgeon", 200, "Mt. Lake", "6am-7pm", "Summer/Winter", "Any", 78, "25 Dart"),
      new Fish("Walleye", 105, "River, F. Pond, Mt. Lake", "12pm-2am", "Fall", "Rainy", 45, "smooth"),
      new Fish("Bullhead", 75, "Mt. Lake", "Anytime", "All Seasons", "Any", 46, "Smooth"),
      new Fish("Lingcod", 120, "River, Mt. Lake", "Anytime", "Winter", "Any", 85, "Mixed"),
      new Fish("Chub", 50, "Forest River, Mt. Lake", "Anytime", "All Seasons", "Any", 35, "Dart"),
      new Fish("Catfish", 200, "River, Swamp", "Anytime", "Spring/Fall", "Rainy", 75, "Mixed"),
      new Fish("Catfish", 200, "Woods", "Anytime", " Spring/Summer in Woods", "Rainy", 75, "Mixed"),
      new Fish("Pike", 100, "River, F. Pond", "Anytime", "Summer/Winter", "Any", 60, "dart"),
      new Fish("Sunfish", 30, "River, F. Farm", "6am-7pm", "Spring/Fall", "Any", 28, "Mixed"),

      new Fish("Ghostfish", 45, "Mines(20,60)", "Anytime", "All Seasons", "Any", 50, "Mixed"),
      new Fish("Stonefish", 300, "Mines(20) need lvl 3 fishing", "Anytime", "All Seasons", "Any", 65, "Sinker"),
      new Fish("Ice Pip", 500, "Mines(60) need lvl 5 fishing", "Anytime", "All Seasons", "Any", 85, "Dart"),
      new Fish("Lava Eel", 700, "Mines(100) need lvl 7 fishing", "Anytime", "All Seasons", "Any", 90, "Mixed"),
      new Fish("Sandfish", 75, "Desert", "6am-8pm", "All Seasons", "Any", 65, "Mixed"),
      new Fish("Scorpion Carp", 150, "Desert need lvl 4 fishing", "6am-8pm", "All seasons", "Any", 90, "Dart"),
     
      new Fish("Tiger Trout", 150, "River", "6am-7pm", "Fall/Winter", "Any", 60, "Dart"),
      
      new Fish("Dorado", 100, "Forest River", "6am-7pm", "Summer", "Any", 78, "Mixed"),
      
      new Fish("Shad", 60, "River", "9am-2am", "Spring/Summer/Fall", "Rainy", 45, "Smooth"),

      
      new Fish("Woodskip", 75, "Woods, Forest Farm", "Anytime", "All Seasons", "Any", 50, "Mixed"),
      new Fish("Void Salmon", 150, "Swamp", "Anytime", "All Seasons", "Any", 80, "Mixed"),
      new Fish("Slimejack", 100, "Mutant Bug Lair", "Anytime", "All Seasons", "Any", 55, "Dart"),
    ]
  }

  getFishColor(difficulty) {
    switch(true) {
        case (difficulty <= 30):
          return 'lightgreen';
        case  (difficulty< 50 && difficulty>30) :
          return 'yellowgreen';
        case (difficulty <=70 && difficulty>=50):
          return 'yellow';
        case (difficulty <90 && difficulty > 70):
          return 'orange';
        case (difficulty >= 90):
          return 'red';
        default: 
          return 'white'

    }
}
}
