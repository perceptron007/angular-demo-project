import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainEditContainerComponent } from './train-edit-container.component';

describe('TrainEditContainerComponent', () => {
  let component: TrainEditContainerComponent;
  let fixture: ComponentFixture<TrainEditContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainEditContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
