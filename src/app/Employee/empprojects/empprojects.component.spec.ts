import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpprojectsComponent } from './empprojects.component';

describe('EmpprojectsComponent', () => {
  let component: EmpprojectsComponent;
  let fixture: ComponentFixture<EmpprojectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpprojectsComponent]
    });
    fixture = TestBed.createComponent(EmpprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
