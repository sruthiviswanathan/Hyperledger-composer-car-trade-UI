import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTradeComponent } from './car-trade.component';

describe('CarTradeComponent', () => {
  let component: CarTradeComponent;
  let fixture: ComponentFixture<CarTradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarTradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
