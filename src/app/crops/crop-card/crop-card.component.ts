import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crop-card',
  templateUrl: './crop-card.component.html',
  styleUrls: ['./crop-card.component.css']
})
export class CropCardComponent implements OnInit {
  public name: string;
  public season: string;
  public growthTime: number;
  public cost: number;
  public regrowth: boolean;
  public regrowthTime: number;
  public harvestValue: number;
  public gpd: number;
  public additional: string;
  constructor() { }

  ngOnInit() {
  
  this.name = "Ancient Fruit";
  this.season = "Spring/Summer/Fall";
  this.growthTime=  28;
  this.cost = 0;
  this.regrowth = true;
  this.regrowthTime= 7;
  this.harvestValue= 550;
  this.gpd= 57.14;
  this.additional="Cart sells for 100-1000g";
  }
}
