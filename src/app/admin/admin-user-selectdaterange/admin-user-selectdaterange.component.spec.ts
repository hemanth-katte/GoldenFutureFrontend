import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserSelectdaterangeComponent } from './admin-user-selectdaterange.component';

describe('AdminUserSelectdaterangeComponent', () => {
  let component: AdminUserSelectdaterangeComponent;
  let fixture: ComponentFixture<AdminUserSelectdaterangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserSelectdaterangeComponent]
    });
    fixture = TestBed.createComponent(AdminUserSelectdaterangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
