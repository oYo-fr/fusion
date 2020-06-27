import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  @Input() output: string = "";
  @Input() options: any = {
    renderer: 'markdown'
  };
  editorOptions = { theme: 'vs-dark', language: 'csharp', automaticLayout: true };

  constructor() { }

  ngOnInit(): void {
  }

  onInit(editor) {
    editor.getPosition();
  }
}
