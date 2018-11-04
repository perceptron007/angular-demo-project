import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanitorCheckInCreateComponent } from './janitor-check-in-create.component';

describe('JanitorCheckInCreateComponent', () => {
  let component: JanitorCheckInCreateComponent;
  let fixture: ComponentFixture<JanitorCheckInCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanitorCheckInCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanitorCheckInCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
