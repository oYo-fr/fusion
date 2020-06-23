import { Component, Input } from '@angular/core';
import * as Handlebars from 'handlebars/dist/handlebars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _mustache: string = "# I ❤️ ngx-markdown\n## Crazy\n{{name}}";
  get mustache(): string {
    return this._mustache;
  }
  set mustache(value: string) {
    this._mustache = value;
    this.result = Handlebars.compile(this._mustache)(this.data);
  }

  data = {
    name: "Fusion"
  }
  result = Handlebars.compile(this._mustache)(this.data);
  editorOptions = { theme: 'vs-dark', language: 'csharp' };

  public constructor() {
    this.result = Handlebars.compile(this._mustache)(this.data);
  }

  onKey(event: any) { // without type info
  }
}
