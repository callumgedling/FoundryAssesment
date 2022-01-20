import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementsByClientComponent } from './engagements-by-client.component';

describe('EngagementsByClientComponent', () => {
  let component: EngagementsByClientComponent;
  let fixture: ComponentFixture<EngagementsByClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngagementsByClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementsByClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
