import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoViewerRowComponent } from './memo-viewer-row.component';

describe('MemoViewerRowComponent', () => {
  let component: MemoViewerRowComponent;
  let fixture: ComponentFixture<MemoViewerRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoViewerRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoViewerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
