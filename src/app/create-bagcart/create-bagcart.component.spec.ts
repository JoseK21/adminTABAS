import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBagcartComponent } from './create-bagcart.component';

describe('CreateBagcartComponent', () => {
  let component: CreateBagcartComponent;
  let fixture: ComponentFixture<CreateBagcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBagcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBagcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
