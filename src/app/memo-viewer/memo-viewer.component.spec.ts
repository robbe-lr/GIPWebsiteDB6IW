import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoViewerComponent } from './memo-viewer.component';

describe('MemoViewerComponent', () => {
  let component: MemoViewerComponent;
  let fixture: ComponentFixture<MemoViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
