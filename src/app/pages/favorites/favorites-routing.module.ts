import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { YeahFavoritesComponent } from "./component/yeah-favorites.component";

const routes: Routes = [
  {
    path: "",
    component: YeahFavoritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRouterModule {}
