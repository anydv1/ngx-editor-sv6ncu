import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { NgxEditorModule } from "ngx-editor";
import schema from "./schema";
import plugins from "./plugins";
import nodeviews from "./nodeviews";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxEditorModule.forRoot({
      schema,
      plugins,
      nodeViews: nodeviews
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
