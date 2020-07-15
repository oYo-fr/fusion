import { Component, Input } from '@angular/core';
import * as Handlebars from 'handlebars/dist/handlebars';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _template: string = "# I ❤️ ngx-markdown\n## Crazy\n{{name}}";
  get template(): string {
    return this._template;
  }
  set template(value: string) {
    this._template = value;
    this.refresh();
  }

  private _src: string = "{ \"name\": \"Fusion\" }";
  get src(): any {
    return this._src;
  }
  set src(value: any) {
    this._src = value;
    this.refresh();
  }

  private _data: any;

  public onData(value: any) {
    this._data = value;
    this.refresh();
  }

  private _selector: string = "return data;";
  private _selectorFunction = new Function('data', this._selector);

  get selector(): string {
    return this._selector;
  }
  set selector(value: string) {
    this._selector = value;
    this._selectorFunction = new Function('data', this._selector);
    this.refresh();
  }

  private runSelector(data) {
    try {
      return this._selectorFunction(data);
    } catch (ex) {
      console.log(ex);
      return data;
    }
  }

  step = 0;
  components = [{
    type:"json-input",
    x:10,
    y:50
  }]

  public setStep(index: number) {
    this.step = index;
  }

  public nextStep() {
    this.step++;
  }

  public prevStep() {
    this.step--;
  }

  output = Handlebars.compile(this._template)(this._data);
  editorOptions = { theme: 'vs-dark', language: 'csharp' };
  options: any = {
    renderer: 'markdown'
  }

  public constructor() {
    this.refresh();
  }

  refresh() {
    try {
      this.output = Handlebars.compile(this._template)(this.runSelector(this._data));
    } catch (ex) {
      console.log(ex);
    }
  }

  onKey(event: any) { // without type info
  }


  drop(event: CdkDragDrop<{title: string, poster: string}[]>) {
    this.components.push({
      type:"json-input",
      x:10,
      y:50
    });
  }
}
