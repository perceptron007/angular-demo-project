import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyEditorComponent } from './penalty-editor.component';

describe('PenaltyEditorComponent', () => {
  let component: PenaltyEditorComponent;
  let fixture: ComponentFixture<PenaltyEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltyEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
