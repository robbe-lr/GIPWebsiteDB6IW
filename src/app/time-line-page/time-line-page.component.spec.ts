import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLinePageComponent } from './time-line-page.component';

describe('TimeLinePageComponent', () => {
  let component: TimeLinePageComponent;
  let fixture: ComponentFixture<TimeLinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeLinePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
