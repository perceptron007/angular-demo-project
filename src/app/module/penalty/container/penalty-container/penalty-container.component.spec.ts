import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyContainerComponent } from './penalty-container.component';

describe('PenaltyContainerComponent', () => {
  let component: PenaltyContainerComponent;
  let fixture: ComponentFixture<PenaltyContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltyContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
