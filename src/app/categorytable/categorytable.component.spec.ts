import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorytableComponent } from './categorytable.component';

describe('CategorytableComponent', () => {
  let component: CategorytableComponent;
  let fixture: ComponentFixture<CategorytableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorytableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
