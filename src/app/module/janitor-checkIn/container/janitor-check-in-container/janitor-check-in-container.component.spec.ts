import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanitorCheckInContainerComponent } from './janitor-check-in-container.component';

describe('JanitorCheckInContainerComponent', () => {
  let component: JanitorCheckInContainerComponent;
  let fixture: ComponentFixture<JanitorCheckInContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanitorCheckInContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanitorCheckInContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
