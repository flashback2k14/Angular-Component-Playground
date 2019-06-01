import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { YeahBottomBarComponent } from "./bottom-bar/yeah-bottom-bar.component";
import { YeahButtonComponent } from "./button/yeah-button.component";
import { YeahHeaderComponent } from "./header/yeah-header.component";
import { YeahInputComponent } from "./input/yeah-input.component";
import { YeahTagItemComponent } from "./item/tag-item/yeah-tag-item.component";
import { YeahUrlItemComponent } from "./item/url-item/yeah-url-item.component";
import { YeahLinkComponent } from "./link/yeah-link.component";
import { YeahTagListComponent } from "./list/tag-list/yeah-tag-list.component";
import { YeahUrlListComponent } from "./list/url-list/yeah-url-list.component";
import { YeahSearchComponent } from "./search/yeah-search.component";
import { YeahSeparatorComponent } from "./separator/yeah-separator.component";
import { YeahTextareaComponent } from "./textarea/yeah-textarea.component";

@NgModule({
  declarations: [
    YeahBottomBarComponent,
    YeahButtonComponent,
    YeahHeaderComponent,
    YeahInputComponent,
    YeahTagItemComponent,
    YeahUrlItemComponent,
    YeahLinkComponent,
    YeahTagListComponent,
    YeahUrlListComponent,
    YeahSearchComponent,
    YeahSeparatorComponent,
    YeahTextareaComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    YeahBottomBarComponent,
    YeahButtonComponent,
    YeahHeaderComponent,
    YeahInputComponent,
    YeahTagItemComponent,
    YeahUrlItemComponent,
    YeahLinkComponent,
    YeahTagListComponent,
    YeahUrlListComponent,
    YeahSearchComponent,
    YeahSeparatorComponent,
    YeahTextareaComponent,
    FormsModule
  ]
})
export class SharedModule {}
