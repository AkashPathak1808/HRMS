import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpprofileComponent } from './empprofile.component';

describe('EmpprofileComponent', () => {
  let component: EmpprofileComponent;
  let fixture: ComponentFixture<EmpprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpprofileComponent]
    });
    fixture = TestBed.createComponent(EmpprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
