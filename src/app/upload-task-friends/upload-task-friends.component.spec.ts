import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTaskFriendsComponent } from './upload-task-friends.component';

describe('UploadTaskFriendsComponent', () => {
  let component: UploadTaskFriendsComponent;
  let fixture: ComponentFixture<UploadTaskFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadTaskFriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTaskFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
