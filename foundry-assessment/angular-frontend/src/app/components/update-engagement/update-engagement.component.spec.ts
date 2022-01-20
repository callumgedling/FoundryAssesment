import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEngagementComponent } from './update-engagement.component';

describe('UpdateEngagementComponent', () => {
  let component: UpdateEngagementComponent;
  let fixture: ComponentFixture<UpdateEngagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEngagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
