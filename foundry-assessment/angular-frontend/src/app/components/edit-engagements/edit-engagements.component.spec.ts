import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEngagementsComponent } from './edit-engagements.component';

describe('EditEngagementsComponent', () => {
  let component: EditEngagementsComponent;
  let fixture: ComponentFixture<EditEngagementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEngagementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEngagementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
