import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyListContainerComponent } from './penalty-list-container.component';

describe('PenaltyListContainerComponent', () => {
  let component: PenaltyListContainerComponent;
  let fixture: ComponentFixture<PenaltyListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltyListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
