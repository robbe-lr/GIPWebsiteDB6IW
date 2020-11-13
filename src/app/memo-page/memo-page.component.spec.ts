import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoPageComponent } from './memo-page.component';

describe('MemoPageComponent', () => {
  let component: MemoPageComponent;
  let fixture: ComponentFixture<MemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
