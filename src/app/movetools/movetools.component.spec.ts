import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovetoolsComponent } from './movetools.component';

describe('MovetoolsComponent', () => {
  let component: MovetoolsComponent;
  let fixture: ComponentFixture<MovetoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovetoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovetoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
