import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCardComponent } from './area-card.component';

describe('AreaCardComponent', () => {
  let component: AreaCardComponent;
  let fixture: ComponentFixture<AreaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
