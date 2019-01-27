import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CropCardComponent } from './crops/crop-card/crop-card.component';
import { FishCardComponent } from './fish/fish-card/fish-card.component';
import { VillagerCardComponent } from './villagers/villager-card/villager-card.component';
import { CardContainerComponent } from './container/card-container/card-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CropCardComponent,
    FishCardComponent,
    VillagerCardComponent,
    CardContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
