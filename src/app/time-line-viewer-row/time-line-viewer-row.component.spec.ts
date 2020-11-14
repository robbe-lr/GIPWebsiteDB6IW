import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineViewerRowComponent } from './time-line-viewer-row.component';

describe('TimeLineViewerRowComponent', () => {
  let component: TimeLineViewerRowComponent;
  let fixture: ComponentFixture<TimeLineViewerRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeLineViewerRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineViewerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
