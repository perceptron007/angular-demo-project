import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyCreateContainerComponent } from './penalty-create-container.component';

describe('PenaltyCreateContainerComponent', () => {
  let component: PenaltyCreateContainerComponent;
  let fixture: ComponentFixture<PenaltyCreateContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltyCreateContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyCreateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
