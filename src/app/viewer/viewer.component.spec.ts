import { ComponentFixture, TestBed } from '@angular/core/testing';

import { viewerComponent } from './viewer.component';

describe('PictureViewerComponent', () => {
  let component: viewerComponent;
  let fixture: ComponentFixture<viewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ viewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(viewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
