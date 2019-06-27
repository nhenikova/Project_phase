import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentcityweatherComponent } from './currentcityweather.component';

describe('CurrentcityweatherComponent', () => {
  let component: CurrentcityweatherComponent;
  let fixture: ComponentFixture<CurrentcityweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentcityweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentcityweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
