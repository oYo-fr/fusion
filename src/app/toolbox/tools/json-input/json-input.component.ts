import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-json-input',
  templateUrl: './json-input.component.html',
  styleUrls: ['./json-input.component.scss']
})
export class JsonInputComponent implements OnInit {
  private _src: string = "";
  get src(): string {
    return this._src;
  }
  @Input() set src(value: string) {
    try {
    this.data.emit(JSON.parse(value));
    }catch{}
    this._src = value;
  }

  @Output() data = new EventEmitter<any>();
  editorOptions = { theme: 'vs-dark', language: 'csharp' };


  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<{title: string, poster: string}[]>) {
  }

}
