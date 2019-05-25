import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagcartToFlightComponent } from './bagcart-to-flight.component';

describe('BagcartToFlightComponent', () => {
  let component: BagcartToFlightComponent;
  let fixture: ComponentFixture<BagcartToFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagcartToFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagcartToFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
