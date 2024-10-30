import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNetworkComponent } from './user-network.component';

describe('UserNetworkComponent', () => {
  let component: UserNetworkComponent;
  let fixture: ComponentFixture<UserNetworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserNetworkComponent]
    });
    fixture = TestBed.createComponent(UserNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
