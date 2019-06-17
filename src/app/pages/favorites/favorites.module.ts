import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { YeahRadioButtonsModule } from "../../atoms/radio-buttons/yeah-radio-buttons.module";

import { YeahFavoritesComponent } from "./component/yeah-favorites.component";
// import { FavoritesRouterModule } from "./favorites-routing.module";

@NgModule({
  declarations: [YeahFavoritesComponent],
  imports: [
    CommonModule,
    // FavoritesRouterModule,
    YeahRadioButtonsModule
  ],
  exports: [CommonModule, YeahFavoritesComponent]
})
export class FavoritesModule {}
