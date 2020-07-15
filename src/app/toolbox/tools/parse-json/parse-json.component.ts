import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-parse-json',
  templateUrl: './parse-json.component.html',
  styleUrls: ['./parse-json.component.scss']
})
export class ParseJsonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  drop(event: CdkDragDrop<{title: string, poster: string}[]>) {
  }
}
