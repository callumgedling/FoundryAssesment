import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementsButtonComponent } from './engagements-button.component';

describe('EngagementsButtonComponent', () => {
  let component: EngagementsButtonComponent;
  let fixture: ComponentFixture<EngagementsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngagementsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
