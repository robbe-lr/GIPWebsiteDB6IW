import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsviewerComponent } from './friendsviewer.component';

describe('FriendsviewerComponent', () => {
  let component: FriendsviewerComponent;
  let fixture: ComponentFixture<FriendsviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
