import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneToFlightComponent } from './plane-to-flight.component';

describe('PlaneToFlightComponent', () => {
  let component: PlaneToFlightComponent;
  let fixture: ComponentFixture<PlaneToFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneToFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneToFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
