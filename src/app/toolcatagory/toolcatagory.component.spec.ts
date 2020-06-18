import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolcatagoryComponent } from './toolcatagory.component';

describe('ToolcatagoryComponent', () => {
  let component: ToolcatagoryComponent;
  let fixture: ComponentFixture<ToolcatagoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolcatagoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolcatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
