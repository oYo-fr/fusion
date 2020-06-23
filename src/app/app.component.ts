import { Component } from '@angular/core';
import * as Handlebars from 'handlebars/dist/handlebars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mustache = "# I ❤️ ngx-markdown\n## Crazy\n{{name}}";
  result = "";
  data = {
    name: "Fusion"
  }

  public constructor(){
    this.result = Handlebars.compile(this.mustache)(this.data);
  }
}
