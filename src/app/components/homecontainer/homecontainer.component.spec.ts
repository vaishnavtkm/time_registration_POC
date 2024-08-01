import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecontainerComponent } from './homecontainer.component';

describe('HomecontainerComponent', () => {
  let component: HomecontainerComponent;
  let fixture: ComponentFixture<HomecontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomecontainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
