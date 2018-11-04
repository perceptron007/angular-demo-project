import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanitorRegisterEditorComponent } from './janitor-register-editor.component';

describe('JanitorRegisterEditorComponent', () => {
  let component: JanitorRegisterEditorComponent;
  let fixture: ComponentFixture<JanitorRegisterEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanitorRegisterEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanitorRegisterEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
