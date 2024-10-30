import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDecisionComponent } from './user-decision.component';

describe('UserDecisionComponent', () => {
  let component: UserDecisionComponent;
  let fixture: ComponentFixture<UserDecisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDecisionComponent]
    });
    fixture = TestBed.createComponent(UserDecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
