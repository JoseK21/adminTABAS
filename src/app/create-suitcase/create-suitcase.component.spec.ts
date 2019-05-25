import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSuitcaseComponent } from './create-suitcase.component';

describe('CreateSuitcaseComponent', () => {
  let component: CreateSuitcaseComponent;
  let fixture: ComponentFixture<CreateSuitcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSuitcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSuitcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
