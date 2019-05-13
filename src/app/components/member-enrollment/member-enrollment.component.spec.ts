import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEnrollmentComponent } from './member-enrollment.component';

describe('MemberEnrollmentComponent', () => {
  let component: MemberEnrollmentComponent;
  let fixture: ComponentFixture<MemberEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
