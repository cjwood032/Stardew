import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fish-card',
  templateUrl: './fish-card.component.html',
  styleUrls: ['./fish-card.component.css']
})
export class FishCardComponent implements OnInit {
  public name: string;
  public price: number;
  public location: string;
  public time: string;
  public season: string;
  public weather: string;
  public difficulty: number;
  public behavior: string;
  constructor() { }

  ngOnInit() {
  }

}
