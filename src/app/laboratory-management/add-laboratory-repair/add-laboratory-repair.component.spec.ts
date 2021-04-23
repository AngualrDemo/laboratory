import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLaboratoryRepairComponent } from './add-laboratory-repair.component';

describe('AddLaboratoryRepairComponent', () => {
  let component: AddLaboratoryRepairComponent;
  let fixture: ComponentFixture<AddLaboratoryRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLaboratoryRepairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLaboratoryRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
