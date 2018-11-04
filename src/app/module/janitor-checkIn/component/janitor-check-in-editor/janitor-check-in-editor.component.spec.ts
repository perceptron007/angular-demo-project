import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanitorCheckInEditorComponent } from './janitor-check-in-editor.component';

describe('JanitorCheckInEditorComponent', () => {
  let component: JanitorCheckInEditorComponent;
  let fixture: ComponentFixture<JanitorCheckInEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanitorCheckInEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanitorCheckInEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
