import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  private _template: string = "";
  @Input()
  set template(val: string) {
    this.templateChange.emit(val);
    this._template = val;
  }
  get template() {
    return this._template;
  }
  @Output()
  templateChange: EventEmitter<string> = new EventEmitter<string>();
  editorOptions = { theme: 'vs-dark', language: 'csharp' };

  constructor() { }

  ngOnInit(): void {
  }

}
