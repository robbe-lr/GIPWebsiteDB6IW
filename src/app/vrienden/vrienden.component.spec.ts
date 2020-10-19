import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VriendenComponent } from './vrienden.component';

describe('VriendenComponent', () => {
  let component: VriendenComponent;
  let fixture: ComponentFixture<VriendenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VriendenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VriendenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
