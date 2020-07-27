import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAutoCompleteComponent } from './location-auto-complete.component';

describe('LocationAutoCompleteComponent', () => {
  let component: LocationAutoCompleteComponent;
  let fixture: ComponentFixture<LocationAutoCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationAutoCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationAutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
