import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayCarouselComponent } from './day-carousel.component';

describe('DayCarouselComponent', () => {
  let component: DayCarouselComponent;
  let fixture: ComponentFixture<DayCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
