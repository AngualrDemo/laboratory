import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentLaboratoryComponent } from './appointment-laboratory.component';

describe('AppointmentLaboratoryComponent', () => {
  let component: AppointmentLaboratoryComponent;
  let fixture: ComponentFixture<AppointmentLaboratoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentLaboratoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
