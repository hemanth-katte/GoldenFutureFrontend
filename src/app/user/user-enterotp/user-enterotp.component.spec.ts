import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEnterotpComponent } from './user-enterotp.component';

describe('UserEnterotpComponent', () => {
  let component: UserEnterotpComponent;
  let fixture: ComponentFixture<UserEnterotpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserEnterotpComponent]
    });
    fixture = TestBed.createComponent(UserEnterotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
