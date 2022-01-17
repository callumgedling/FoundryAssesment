import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsButtonComponent } from './clients-button.component';

describe('ClientsButtonComponent', () => {
  let component: ClientsButtonComponent;
  let fixture: ComponentFixture<ClientsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
