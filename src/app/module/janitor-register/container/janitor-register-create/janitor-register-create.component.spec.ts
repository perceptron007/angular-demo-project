import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JanitorRegisterCreateComponent } from './janitor-register-create.component';

describe('JanitorRegisterCreateComponent', () => {
  let component: JanitorRegisterCreateComponent;
  let fixture: ComponentFixture<JanitorRegisterCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanitorRegisterCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanitorRegisterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
