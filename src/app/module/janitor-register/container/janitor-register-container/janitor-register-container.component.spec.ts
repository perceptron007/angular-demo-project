import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanitorRegisterContainerComponent } from './janitor-register-container.component';

describe('JanitorRegisterContainerComponent', () => {
  let component: JanitorRegisterContainerComponent;
  let fixture: ComponentFixture<JanitorRegisterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanitorRegisterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanitorRegisterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
