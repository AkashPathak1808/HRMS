import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpsettingsComponent } from './empsettings.component';

describe('EmpsettingsComponent', () => {
  let component: EmpsettingsComponent;
  let fixture: ComponentFixture<EmpsettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpsettingsComponent]
    });
    fixture = TestBed.createComponent(EmpsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
