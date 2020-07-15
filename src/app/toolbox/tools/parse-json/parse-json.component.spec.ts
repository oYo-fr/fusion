import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseJsonComponent } from './parse-json.component';

describe('ParseJsonComponent', () => {
  let component: ParseJsonComponent;
  let fixture: ComponentFixture<ParseJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParseJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParseJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
