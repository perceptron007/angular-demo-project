import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanitorRegisterEditComponent } from './janitor-register-edit.component';

describe('JanitorRegisterEditComponent', () => {
  let component: JanitorRegisterEditComponent;
  let fixture: ComponentFixture<JanitorRegisterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanitorRegisterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanitorRegisterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
