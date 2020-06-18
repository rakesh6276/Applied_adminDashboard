import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BayhomeComponent } from './bayhome.component';

describe('BayhomeComponent', () => {
  let component: BayhomeComponent;
  let fixture: ComponentFixture<BayhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BayhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BayhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
