import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  private _src: string = "";
  get src(): string {
    return this._src;
  }
  @Input() set src(value: string) {
    this.data.emit(JSON.parse(value));
    this._src = value;
  }

  @Output() data = new EventEmitter<any>();
  editorOptions = { theme: 'vs-dark', language: 'csharp' };

  constructor() { }

  ngOnInit(): void {
  }

}
