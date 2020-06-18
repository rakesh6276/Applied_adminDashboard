import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtrendComponent } from './labtrend.component';

describe('LabtrendComponent', () => {
  let component: LabtrendComponent;
  let fixture: ComponentFixture<LabtrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
