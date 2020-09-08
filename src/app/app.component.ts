import { Component, ViewEncapsulation } from "@angular/core";

import doc from './doc'

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  name = "Angular";

  doc =  doc;
}
