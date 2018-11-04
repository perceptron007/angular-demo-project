import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanitorCheckInEditComponent } from './janitor-check-in-edit.component';

describe('JanitorCheckInEditComponent', () => {
  let component: JanitorCheckInEditComponent;
  let fixture: ComponentFixture<JanitorCheckInEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanitorCheckInEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanitorCheckInEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
