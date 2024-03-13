import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmppayslipComponent } from './emppayslip.component';

describe('EmppayslipComponent', () => {
  let component: EmppayslipComponent;
  let fixture: ComponentFixture<EmppayslipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmppayslipComponent]
    });
    fixture = TestBed.createComponent(EmppayslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
