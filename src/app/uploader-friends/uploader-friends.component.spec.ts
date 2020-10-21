import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaderFriendsComponent } from './uploader-friends.component';

describe('UploaderFriendsComponent', () => {
  let component: UploaderFriendsComponent;
  let fixture: ComponentFixture<UploaderFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploaderFriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaderFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
