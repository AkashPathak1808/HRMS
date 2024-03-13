import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleaveComponent } from './empleave.component';

describe('EmpleaveComponent', () => {
  let component: EmpleaveComponent;
  let fixture: ComponentFixture<EmpleaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleaveComponent]
    });
    fixture = TestBed.createComponent(EmpleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
