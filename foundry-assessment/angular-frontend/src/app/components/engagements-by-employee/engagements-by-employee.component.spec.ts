import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementsByEmployeeComponent } from './engagements-by-employee.component';

describe('EngagementsByEmployeeComponent', () => {
  let component: EngagementsByEmployeeComponent;
  let fixture: ComponentFixture<EngagementsByEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngagementsByEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementsByEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
