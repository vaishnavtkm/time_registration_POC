import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetaskComponent } from './timetask.component';

describe('TimetaskComponent', () => {
  let component: TimetaskComponent;
  let fixture: ComponentFixture<TimetaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimetaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
