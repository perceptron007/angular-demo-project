import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyEditContainerComponent } from './penalty-edit-container.component';

describe('PenaltyEditContainerComponent', () => {
  let component: PenaltyEditContainerComponent;
  let fixture: ComponentFixture<PenaltyEditContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltyEditContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
