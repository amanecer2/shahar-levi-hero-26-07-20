import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastLocationComponent } from './forecast-location.component';

describe('ForecastLocationComponent', () => {
  let component: ForecastLocationComponent;
  let fixture: ComponentFixture<ForecastLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
