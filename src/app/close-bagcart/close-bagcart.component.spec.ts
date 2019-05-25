import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseBagcartComponent } from './close-bagcart.component';

describe('CloseBagcartComponent', () => {
  let component: CloseBagcartComponent;
  let fixture: ComponentFixture<CloseBagcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseBagcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseBagcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
