import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainCreateContainerComponent } from './train-create-container.component';

describe('TrainCreateContainerComponent', () => {
  let component: TrainCreateContainerComponent;
  let fixture: ComponentFixture<TrainCreateContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainCreateContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainCreateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
