import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEndEngagementComponent } from './update-end-engagement.component';

describe('UpdateEndEngagementComponent', () => {
  let component: UpdateEndEngagementComponent;
  let fixture: ComponentFixture<UpdateEndEngagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEndEngagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEndEngagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
