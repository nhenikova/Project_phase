import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayforecastComponent } from './dayforecast.component';

describe('DayforecastComponent', () => {
  let component: DayforecastComponent;
  let fixture: ComponentFixture<DayforecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayforecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
