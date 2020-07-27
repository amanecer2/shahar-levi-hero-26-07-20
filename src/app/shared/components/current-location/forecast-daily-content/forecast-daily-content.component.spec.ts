import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastDailyContentComponent } from './forecast-daily-content.component';

describe('ForecastDailyContentComponent', () => {
  let component: ForecastDailyContentComponent;
  let fixture: ComponentFixture<ForecastDailyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastDailyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastDailyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
