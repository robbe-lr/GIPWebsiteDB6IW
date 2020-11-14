import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineViewerComponent } from './time-line-viewer.component';

describe('TimeLineViewerComponent', () => {
  let component: TimeLineViewerComponent;
  let fixture: ComponentFixture<TimeLineViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeLineViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
