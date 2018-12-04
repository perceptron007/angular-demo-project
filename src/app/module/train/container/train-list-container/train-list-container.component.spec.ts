import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainListContainerComponent } from './train-list-container.component';

describe('TrainListContainerComponent', () => {
  let component: TrainListContainerComponent;
  let fixture: ComponentFixture<TrainListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
