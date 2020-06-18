import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooinfoComponent } from './tooinfo.component';

describe('TooinfoComponent', () => {
  let component: TooinfoComponent;
  let fixture: ComponentFixture<TooinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
